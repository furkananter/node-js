const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blogs')

const app = express()

// for database url 
const dbURL = 'mongodb+srv://furkan:asd123@blog-1.vcn30.mongodb.net/blog-1?retryWrites=true&w=majority'
// for perfect connection to mongoose
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    // if connection is successful then start the app 
    .then((result) => app.listen(3000))
    // if connection is not successful then show the error
    .catch((err) => console.log(err))


app.set('view engine','ejs')
// view engine is set to ejs


//! express.static is a middleware, it is used to serve static files
//! static files are those which are not changed by the server
app.use(express.static('public'))

//TODO: Different Usage instead of morgan
// app.use((req,res, next) => {
//     console.log(req.method)
//     next();
// })

//* we can use morgan to log the request
//* morgan can useable in dev mod or tiny mod. 
//* morgan is a middleware that can be used in express
//* morgan is a function that takes a format string and returns a function
//* instead of using (req,res,next) => {console.log(req.method); next();}, we can use app.use(morgan('tiny' or 'dev'))
app.use(morgan('dev'))

app.get('/', (req,res)=> {
    //TODO: Now we don't need to use this code like below.
    //* [OLD] res.render('index' , {title: "Anasayfa"})
    //? How we can make these things? 
    Blog.find().sort({ createdAt: 1})
        .then((result) => {res.render('index' , {title: "Anasayfa", blogs: result})
        })
        .catch((err) => {
            console.log(err)
        })
    
})

//* before adding ejs into project; we used to use res.sendFile() instead of res.render()
app.get('/about', (req,res)=> {
    res.render('about' , {title: 'About'} /*{root:__dirname}}*/)
}) 
app.get('/about-us', (req,res)=> { 
    res.redirect('about' , {title: "About"} /*{root:__dirname}}*/)
})
app.get('/login', (req,res) => {
    res.render('login', {title: "Login"})
})

/*
? These ones just calling a document etc.
app.get('/add', (req,res) => {
    const blog = new Blog({
        title: 'Yeni Yazi',
        short: 'Kisa Aciklama',
        long: 'Uzun Aciklama'
    })
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/all', (req,res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

! for reaching single one data.
app.get('/single', (req,res)=> {
    Blog.findById('629b99b2feab366ca70ad51d')
        .then((result) => {res.send(result)})
        .catch((err) => console.log(err))
})
*/

//* creating a middle layer 
app.use((req,res)=> {
    res.status(404).render("404" , {title: "Sayfa Bulunamadı"} /*{root:__dirname}}*/)
})
//* use need to be in the end of the code 