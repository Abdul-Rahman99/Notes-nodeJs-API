const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect(process.env.DB_URI).then((conn) => {
    console.log(`Database connected Succesfully at:: ${conn.connection.host}`);
  });
};
module.exports = dbConnection;