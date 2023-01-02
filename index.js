const { config } = require('dotenv');
const { server } = require('./src/server');

config();

server.listen(process.env.PORT || RENDER_SERVER);