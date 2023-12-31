const express = require("express");
const cors = require("cors");
// const PORT = process.env.PORT;
const mongoose = require("mongoose");
const userRouts = require('./routes/userRouter');
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');
const dbURI = "mongodb+srv://israa:1234@cluster0.zjquu.mongodb.net/orangeTest?retryWrites=true&w=majority"

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(userRouts);
app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(3000, () => {
          console.log(`Starting server on port ${3000}`);
        });
      });
  },
};
