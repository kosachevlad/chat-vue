const express = require('express'),
    socketIO = require('socket.io'),
    path = require('path'),
    http = require('http')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 8000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    const newUser = '';

    socket.on('user.name', user => {
        this.newUser = user;
        io.emit('message', `Hello ${user}!`);
    });
    
    socket.on('message.sent', message => {
        
        io.emit('message', `${message}`);
    });

    io.emit('message', 'someone connected')
})

server.listen(port, () => {
    console.log(`server has been started on port ${port}...`)
})