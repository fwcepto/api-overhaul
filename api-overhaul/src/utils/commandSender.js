const fs = require('fs');
const net = require('net');

const sendCommandToServer = (serverDetails, command) => {
    const { ip, port } = serverDetails;

    return new Promise((resolve, reject) => {
        const client = new net.Socket();

        client.connect(port, ip, () => {
            client.write(command);
        });

        client.on('data', (data) => {
            resolve(data.toString());
            client.destroy();
        });

        client.on('error', (error) => {
            reject(`Error: ${error.message}`);
            client.destroy();
        });

        client.on('close', () => {
            console.log('Connection closed');
        });
    });
};

module.exports = sendCommandToServer;