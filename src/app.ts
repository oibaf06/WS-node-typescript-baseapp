
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req: any, res: any) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket:any) => {
    console.log('a user connected');

    socket.on('chat message', (msg: any) => {
        console.log('message: ' + msg);
        });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});