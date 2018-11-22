const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  //.set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'html')
  //.get('/', (req, res) => res.render('pages/index'))
  .get('/', (req, res) => res.sendFile('index.html', {root : __dirname + '/public'}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))