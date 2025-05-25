# API Overhaul for Remote VPS Command Management

This project provides an API for sending commands to Virtual Private Servers (VPS) remotely. It reads server details and commands from a JSON file and allows users to interact with their VPS instances through a simple RESTful interface.

## Project Structure

```
api-overhaul
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers
│   │   └── vpsController.js  # Handles VPS command logic
│   ├── routes
│   │   └── vpsRoutes.js      # Defines API endpoints
│   ├── utils
│   │   └── commandSender.js   # Logic for sending commands to VPS
│   └── servers.json          # Contains server details and commands
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd api-overhaul
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

- `POST /vps/send-command`: Sends a command to a specified VPS server.
- `GET /vps/server-details`: Retrieves details of the configured VPS servers.

## Configuration

Server details and commands are stored in `src/servers.json`. Ensure this file is properly configured with the necessary information before using the API.

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.