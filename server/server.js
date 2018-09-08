const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");

// initialize mongo stitch
require("./config/mongo");

// import routes
const rooms = require("./api/routes/rooms");
const songs = require("./api/routes/songs");

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// endpoints
app.use("/rooms", rooms);
app.use("/songs", songs);

// listen to port
const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Listening to port ${port}`));
