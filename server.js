const PORT = 1337

const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')

const base62 = require('base62')

const app = express()

let counter = base62.decode('tret37')
let links = {}

// input url has to contain a dot with any character before and after
let validURLreg = /.\../

app.use(favicon(path.join(__dirname, 'favicon.ico')))

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/:tinyurl', function(req, res) {
  let tiny = req.params.tinyurl
  let url = links[tiny]
  console.log('Redir', tiny, url)
  res.redirect(301, url)
})

app.use(bodyParser.json())

app.post('/generate', function(req, res) {
  let tiny = getNextTinyURL()

  let url = req.body.url

  // if url is missing or invalid reject request
  if(!url || !validURLreg.test(url)) {
    res.status(400).end()
    return
  }

  if(!/^https?:\/\//.test(url)) {
    url = 'https://' + url
  }

  links[tiny] = url
  console.log('Added', tiny, url, links[tiny])
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

/* TODO

input validation should also check for invalid URL characters

tests?

 */
