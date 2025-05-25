const express = require('express');
const fs = require('fs');
const { Client } = require('ssh2');

const app = express();

const servers = JSON.parse(fs.readFileSync('servers.json', 'utf8'));

function runCommandOnServer(server) {
  return new Promise((resolve) => {
    const conn = new Client();
    let output = '';
    conn.on('ready', () => {
      conn.exec(server.command, (err, stream) => {
        if (err) {
          conn.end();
          return resolve({ server: server.name, error: 'SSH exec error' });
        }
        stream.on('close', (code, signal) => {
          conn.end();
          resolve({ server: server.name, output, code, signal });
        }).on('data', (data) => {
          output += data;
        }).stderr.on('data', (data) => {
          output += data;
        });
      });
    }).on('error', (err) => {
      resolve({ server: server.name, error: 'SSH connection error', details: err.message });
    }).connect({
      host: server.host,
      port: server.port,
      username: server.username,
      password: server.password
    });
  });
}

app.get('/command', async (req, res) => {
  const results = await Promise.all(servers.map(runCommandOnServer));
  res.json(results);
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});