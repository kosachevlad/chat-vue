const express = require('express')
const socketIO = require('socket.io')
const path = require('path')
const http = require('http')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 8000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('IO Connection')
    const user = Date.now();

    socket.on('message.sent', function(message) {
        io.emit('message', user + ': ' + message);
    });

    io.emit('message', 'user ' + user + ' connected')
})

server.listen(port, () => {
    console.log(`server has been started on port ${port}...`)
})