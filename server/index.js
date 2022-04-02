const express = require("express");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();

const ctrl = require("./controller/apiCtrl");

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/content/home", ctrl.homeContent);
app.get("/api/content/contact", ctrl.contactContent);
app.post("/api/contact", ctrl.formSubmit);

massive({
  connectionString:
    "postgres://vowelndkxtgill:438318fa72ad3099975efb83fb9b1e76af7b634cebbb1ac9dbc984f349e01920@ec2-23-20-224-166.compute-1.amazonaws.com:5432/d24bpj2e6ne7el",
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
