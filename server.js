const PORT = 1337

const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')

const base62 = require('base62')

const app = express()

let counter = base62.decode('tret37')
let links = {}

app.use(favicon(path.join(__dirname, 'favicon.ico')))

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/:tinyurl', function(req, res) {
  console.log('redirect me!', req.params.tinyurl, links[req.params.tinyurl])
  res.redirect(301, 'https://' + links[req.params.tinyurl])
  // res.redirect(301, 'https://google.com')
})

app.use(bodyParser.json())

app.post('/generate', function(req, res) {
  console.log('generate tiny!', req.body.url)
  let tiny = getNextTinyURL()
  links[tiny] = req.body.url

  res.json(JSON.stringify({
    tiny: tiny
  }))
})

app.listen(PORT, function() {
  console.log('Pontus Link Shortener started on localhost:' + PORT, 'at', new Date().toLocaleTimeString())
})

function getNextTinyURL() {

  return zeroPad(base62.encode(counter++))

  function zeroPad(str) {
    while(str.length < 6) {
      str = '0' + str
    }
    return str
  }
}
