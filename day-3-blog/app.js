const express = require('express')
const morgan = require('morgan')

const app = express()
app.set('view engine','ejs')
// view engine is set to ejs

app.listen(3000)


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
    res.render('index' , {title: "Anasayfa"})
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

//* creating a middle layer 
app.use((req,res)=> {
    res.status(404).render("404" , {title: "Sayfa Bulunamadı"} /*{root:__dirname}}*/)
})
//* use need to be in the end of the code 