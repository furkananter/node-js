const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//* creating a schema is like creating a table in database
//* We will create a scheme.
//* This scheme will be the system of our files. We will specify in this file which data we will keep and how. 

const blogSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    short: {
        type: String,
        require: true,
    },
    long: {
        type: String,
        require: true,
    }
}, {timestamp: true})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog