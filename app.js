// import express
var express = require('express')

// instantiating the express server
var app = express()
var port = 4000

// require path
var path = require('path')

// running express with ejs
app.set('view engine', 'ejs')

// app.use('/', express.static(path.join(__dirname, 'views')))

// example of a middleware
// app.use(function (req, res, next) {
//   console.log('new req method is: ' + req.method, 'new req url is: ' + req.url)
//   next()
// })

// set all the routes
var routes = require('./routes/index')
var user_routes = require('./routes/users')
var posts_routes = require('./routes/posts')

// set the middleware for routes
app.get('/', function (req, res) {
  // res.send('homepage')
  res.render('index', {name: 'Glen Choo'})
})

// app.use('/', routes)
// app.use('/users', user_routes)
// app.use('/posts', posts_routes)

// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
