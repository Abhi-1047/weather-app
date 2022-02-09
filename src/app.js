const path = require('path');
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 5000;

const staticPath = path.join(__dirname, '../public')
const template_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials')


app.set('view engine' , 'hbs')
app.set('views',template_path)
hbs.registerPartials(partials_path)

app.use(express.static(staticPath))



app.get('/', (req, res) => {
    // res.send('Welcome to the page')
    res.render('index')
})

app.get('/about', (req, res) => {
    // res.send('About page')
    res.render('about')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('/*', (req, res) => {
    // res.send('404 error')
    res.render('404error', {
        errorMsg:'Opps! page not found'
    })
})

app.listen(port , '127.0.0.1' , ()=>{
    console.log(`Listning on the port ${port}`);
})

