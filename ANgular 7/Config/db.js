    
const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = () => {
  mongoose.connect(dbURL, { useNewUrlParser: true })
    .then(() => console.log(`Mongo puerto ${dbURL}`))
    .catch(err => console.log(`error de conección ${err}`))

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(`Mongo desconectado`);
      process.exit(0)
    });
  });
}