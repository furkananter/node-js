const express = require('express')

const app = express()
app.set('view engine','ejs')
// view engine is set to ejs

app.listen(3000)

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
//* creating a middle layer 
app.use((req,res)=> {
    res.status(404).render("404" , {title: "Sayfa Bulunamadı"} /*{root:__dirname}}*/)
})
//* use need to be in the end of the code 