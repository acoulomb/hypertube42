const dotenv = require('dotenv')

dotenv.load()

const config = {
  API_HOST: process.env.API_HOST || 'localhost',
  API_PORT: process.env.API_PORT || 4000,
  AUTH_SERVER_HOST: process.env.API_HOST || 'localhost',
  AUTH_SERVER_PORT: process.env.API_PORT || 5000,
  OAUTH_ID: process.env.API_PORT || 'dc45ef1a1da5c3ee8f45e5c32587ea44d01f8c4625910127cc8bca191e21b6bf',
  OAUTH_SECRET: process.env.API_PORT || '38f25a82b87c830a361b469a5137de5f94042f54114e6f947b47c789e72fce48',
}

module.exports = config
