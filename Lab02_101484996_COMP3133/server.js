// dependencies : npm install express socket.io nodemon
// to run the app : npx nodemon server.js

const express = require('express');
const path = require('path');
const ioSocket = require('socket.io');

const SERVER_PORT = process.env.PORT || 3000;
const app = express();

// serve static files
app.use(express.static(path.join(__dirname, 'socket/views')));

// default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'socket/views/client.html'));
});

// start server
const appServer = app.listen(SERVER_PORT, () => {
    console.log(`Server running on http://localhost:${SERVER_PORT}/`);
});

// socket.io server
const ioServer = ioSocket(appServer);

ioServer.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // ping server
    socket.on('pingServer', () => {
        console.log('Ping received from client');
        socket.emit('pongClient', 'Pong from server');
    });

    // chat message
    socket.on('chatMessage', (message) => {
        console.log('Chat message:', message);
        socket.emit('chatResponse', message);
    });

    // feedback
    socket.on('feedback', (feedbackMsg) => {
        console.log('Feedback received:', feedbackMsg);
        socket.emit('feedbackResponse', 'Feedback received successfully');
    });

    // join group (room)
    socket.on('joinGroup', () => {
        socket.join('group1');
        console.log(`Client ${socket.id} joined group1`);
        socket.emit('groupStatus', 'You joined group1');
    });

    // leave group (room)
    socket.on('leaveGroup', () => {
        socket.leave('group1');
        console.log(`Client ${socket.id} left group1`);
        socket.emit('groupStatus', 'You left group1');
    });

    // disconnect
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});
