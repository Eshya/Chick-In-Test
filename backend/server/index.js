require("dotenv").config()
const express = require('express')
const path = require('path')
const cors = require("cors");
const ReadEnv = require("./utils/readEnv").ReadEnv
const readEnv = new ReadEnv();
const mongoose = require('mongoose');
const mosca = require('mosca');
const PORT = readEnv.get("PORT") || 3000
const PORT_BACKEND = readEnv.get("PORT_BACKEND") || 5000
const DIST_FOLDER = path.resolve(__dirname, '..', 'src')


const app = express();
const appBackend = express();
app.use(express.static(DIST_FOLDER));

appBackend.use(cors());
appBackend.use(express.json());
appBackend.use('/api', require('./route/route.js'));
// Use This Port For Front End
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
// Use This Port For Back End
appBackend.listen(PORT_BACKEND, () => console.log(`Listening on http://localhost:${PORT_BACKEND}`));

const db = require("./model");
db.mongoose.connect(process.env.MONGODB_URL || process.env.MONGODB_URL_LOCAL, {
  auth: {
      username: process.env.MONGODB_USERNAME,
      password: process.env.MONGODB_PASSWORD
  },
  authSource: "admin",
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err) => {
  if (err) return console.log("Error: ", err);
  console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
})

db.mongoose.connection.once('open', () => {
  console.log("DB Connected!")
});

///// <<<<<<<<<<<<<<<<<<<<<<<<<<<<< MQTT BROKER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TESTING
// var ascoltatore = {
//     //using ascoltatore
//     type: 'mongo',
//     url: 'mongodb://mongo-database:27017/mqtt',
//     pubsubCollection: 'ascoltatori',
//     mongo: {}
//   };
//   var settings = {
//     port: 1883,
//     backend: ascoltatore
//   };

// var server = new mosca.Server(settings);
// server.on('ready', setup);
// server.on('clientConnected', function(client) {
//     console.log('client connected', client.id);
// });

// // fired when a message is received
// server.on('published', function(packet, client) {
//   console.log('Published', packet.payload);
// });
// // fired when the mqtt server is ready
// function setup() {
//     console.log('Mosca server is up and running');
//   }
// server.on('ready', setup);


// // Sending data from mosca to clients
// var message = {
//     topic: '/hello/world',
//     payload: 'abcde', // or a Buffer
//     qos: 0, // 0, 1, or 2
//     retain: false // or true
//   };
// server.publish(message, function() {
//     console.log('done!');
//  });

//  // fired when a message is received
// server.on('published', function(packet, client) {
//     console.log('Published', packet.payload);
//   });
  
//   // fired when the mqtt server is ready
//   function setup() {
//     console.log('Mosca server is up and running')
// }