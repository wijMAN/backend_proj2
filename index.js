const express = require("express");
require('dotenv').config();

const users = require("./MOCK_DATA.json");

const app = express();
const port1 = process.env.PORT; // PORT variable from .env file



//routes
app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/", (req, res) => {
    res.send(`<h1>Welcome</h1>`);
});

app.listen(port1, () => {
  console.log(`Server is running on http://localhost:${port1}`);
});
