class VpsController {
    constructor(servers) {
        this.servers = servers;
    }

    getServerDetails(req, res) {
        res.json(this.servers);
    }

    sendCommand(req, res) {
        const { serverId, command } = req.body;
        const server = this.servers.find(s => s.id === serverId);

        if (!server) {
            return res.status(404).json({ error: 'Server not found' });
        }

        if (!server.commands.includes(command)) {
            return res.status(400).json({ error: 'Command not available' });
        }

        // Logic to send command to the server
        // This should call the commandSender utility function
        // sendCommandToServer(server, command);

        res.json({ message: `Command "${command}" sent to server ${serverId}` });
    }
}

module.exports = VpsController;