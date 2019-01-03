const {User} = require ('./models/Users')
const {TeeTimes} = require('./models/TeeTimes')

const express = require('express')
const mongoose = require('mongoose') 
const {ObjectId} = require('mongodb')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const bodyParser = require('body-parser')
const assert = require('assert')

const app = express()
const port = 3003
mongoose.connect('mongodb://localhost:27017/tee-times-db', { useNewUrlParser: true })
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/tee-times-db',
    collection: 'sessions'
})

// catch errors
store.on('error', error => {
    assert.ifError(error)
    assert.ok(false)
})

app.use(session({
    secret: 'random123',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store,
    resave: true,
    saveUninitialized: true,
}))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

// app.get('/', (req, res) => {
//     res.send('Hello')
// })

app.post('/user', (req, res) => {
    console.log('adding new user')
})

app.post('/login', (req, res) => {
    console.log('logging in user')
})

app.get('/logout', (req, res) => {
    console.log('logging out')
})

app.post('/updateUser', (req, res) => {
    console.log('updating new user')
})

app.delete('/user', (req, res) => {
    console.log('deleting new user')
})

app.listen(port, () => console.log(`My Tee Times App listening on port ${port}!`))