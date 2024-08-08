const mongoose = require("mongoose")
const BaseModel = require("./BaseModel")
const MD5 = require("../utils/md5")

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: {
        type: String,
        required: true,
        set: value => md5(value),
        select: false
    },
    ...BaseModel
})

const User = mongoose.model('user', userSchema)

module.exports = { User }

