const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const port = process.env.PORT || 4001;

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', socket => {
    console.log("User connected");

    socket.on('change color', color => {
      socket.broadcast.emit('change color', color);
        console.log('Change Color to:', color)
    })

    socket.on("disconnect", () => {
        console.log("User Disconnected");
    })
})

server.listen(port, () => console.log("Listening on port"+ "  " +port));