const mongoose = require("mongoose")
const BaseModel = require("./BaseModel")
const MD5 = require("./utils/MD5")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: value => MD5(value),
        select: false
    },
    ...BaseModel
})

const User = mongoose.model('user', userSchema)

module.exports = { User }

