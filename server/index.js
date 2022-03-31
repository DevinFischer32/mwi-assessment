const express = require("express");
const massive = require("massive");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const ctrl = require("./controller/apiCtrl");

const { CONNECTION_STRING } = process.env;

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/content/home", ctrl.homeContent);
app.get("/api/content/contact", ctrl.contactContent);
app.post("/api/contact", ctrl.formSubmit);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((db) => {
    app.set("db", db);
    console.log("db connected");
    app.listen(PORT, () => console.log(`Live on Port ${PORT}`));
  })
  .catch((err) => console.log(err));
