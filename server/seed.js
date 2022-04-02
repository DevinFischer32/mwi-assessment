const fs = require("fs");
const massive = require("massive");
const express = require("express");

const app = express();
const seedQuery = fs.readFileSync("db/seed.sql", { encoding: "utf8" });

massive({
  connectionString:
    "postgres://vowelndkxtgill:438318fa72ad3099975efb83fb9b1e76af7b634cebbb1ac9dbc984f349e01920@ec2-23-20-224-166.compute-1.amazonaws.com:5432/d24bpj2e6ne7el",
  ssl: {
    rejectUnauthorized: false,
  },
}).then((db) => {
  app.set("db", db);
  db.query(seedQuery, (err, res) => {
    console.log(err, res);
  }).then(() => {
    console.log("Seeding Completed!");
    db.instance.$pool.end();
  });
});
