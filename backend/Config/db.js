// backend/Config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const mongodbConnect = () => {
     mongoose.connect(process.env.MONGODB_URL)
     .then((conn) => {
          console.log(`Connected to :${conn.connection.host}`);
     })
     .catch((error) => {
          console.log("Error while connecting to DB", error.message);
     })
}

module.exports = mongodbConnect;
