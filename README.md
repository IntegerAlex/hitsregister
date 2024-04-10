# Blog Site Hit Counter with User Input Logger

This project implements a hit counter for a blog site using an Express server and a MongoDB database. Additionally, it relies on the JSON provided by the [user-input-logger](https://github.com/IntegerAlex/user-input-logger) to log user information.

## Installation

Clone the repository:

`git clone https://github.com/IntegerAlex/hitsregister`

Install dependencies:
`npm install`

Set up environment variables:

Create a .env file in the root directory of the project and add the following variables:

```bash
MONGODB_USERNAME=<your-mongodb-username>
MONGO_DB_PASSWORD=<your-mongodb-password>
```

Start the server:

`npm start`

Usage

Hit Counter Endpoint: The server listens for POST requests to /visit to register hits on the blog site. The client can send JSON data containing user information, and the server logs this information to the MongoDB database.

User Input Logger: This project includes a custom npm library called user-input-logger to log user information. This library logs information such as user agent, IP address, timestamp, etc., and stores it in the MongoDB database.

## Dependencies

Express: Fast, unopinionated, minimalist web framework for Node.js.
MongoDB: General-purpose, document-based, distributed database built for modern application developers and for the cloud era.
user-input-logger: Custom npm library for logging user input information. [user-input-logger](https://www.npmjs.com/package/user-input-logger)

## Contributing

Contributions are welcome! Please fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.
