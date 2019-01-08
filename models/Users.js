const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Types

// const FriendShipSchema = require('./FriendShip')

const UserSchema = new Schema({
    name: String,
    pwhash: String,
    userType: String,
    friends: [ObjectId],
    requestedFriends: [ObjectId],
    friendRequests: [ObjectId]
})

const User = mongoose.model('User', UserSchema)

module.exports = {User, UserSchema}