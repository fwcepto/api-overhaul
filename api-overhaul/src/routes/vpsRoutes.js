const express = require('express');
const VpsController = require('../controllers/vpsController');

const router = express.Router();
const vpsController = new VpsController();

function setRoutes(app) {
    router.post('/send-command', vpsController.sendCommand.bind(vpsController));
    router.get('/server-details', vpsController.getServerDetails.bind(vpsController));
    
    app.use('/api/vps', router);
}

module.exports = setRoutes;