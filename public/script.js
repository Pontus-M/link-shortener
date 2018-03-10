let serverURL = 'localhost:1337/'

// input url has to contain a dot with any character before and after
let validURLreg = /.\../

let vue = new Vue({
  el: '#content',
  data: {
    input: '',
    latestURL: null,
    latestLinks: [],
    error: false
  },
  methods: {
    setup: setup,
    handleKeyDown: handleKeyDown,
    showError: showError
  }
})

window.addEventListener('load', setup)

function setup() {
  if (window.localStorage.latestLinks) {
    this.latestLinks = JSON.parse(localStorage.latestLinks)
  }
}

function handleKeyDown(event) {
  if (event.key === 'Enter') {
    generateLink()
  }
}

function generateLink() {

  let inputURL = vue.input
  
  if (isLinkInvalid(inputURL)) {
    vue.showError()
    return
  } else {
    vue.error = false
  }

  fetch('http://localhost:1337/generate', {
    method: 'POST',
    body: JSON.stringify({ url: inputURL }),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
    .catch(err => console.log('response error', err))
    .then(res => gotNewLink(JSON.parse(res).tiny))
}

function gotNewLink(url) {
  vue.latestURL = serverURL + url

  if (vue.latestLinks.length > 9) vue.latestLinks.pop()

  vue.latestLinks.unshift(vue.latestURL)

  window.localStorage.latestLinks = JSON.stringify(vue.latestLinks)
}

function showError() {
  vue.error = true

  setTimeout(() => {
    vue.error = false
  }, 10000) // delay in ms
}

function isLinkInvalid(url){
  return !validURLreg.test(url)
}
