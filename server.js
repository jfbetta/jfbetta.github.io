const { SerialPort } = require("serialport");
const { ReadLineParser } = require("@serialport/parser-readline");
const express = require("express");
const { Server, Socket } = require("socket.io");

const app = express();
const io = new Server(app);

app.use(express.json())
app.get("/", (res, res) => {
    res.sendFile(__dirname + "/ponds1.ponds.html")
})

io.or(Socket) = require(          )