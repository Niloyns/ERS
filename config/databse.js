const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://niloysarkar1998:ld6SDS8XtdS7M8FO@cluster0.8e58vok.mongodb.net/?retryWrites=true&w=majority"
  // {
  //   useNewUrlParser: true,
  //   useUnifiedTopolgy: true,
  // }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
  console.log("Database Connection has been established");
});

module.exports = db;
