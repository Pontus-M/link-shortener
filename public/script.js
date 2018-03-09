let serverURL = 'localhost:1337/'

let vue = new Vue({
  el: '#content',
  data: {
    input: '',
    latestURL: null,
    latestLinks: []
  },
  methods: {
    setup() {
      console.log('getting started!', window.localStorage)
      if (window.localStorage.latestLinks) {
        console.log('Latest links found!')
        this.latestLinks = JSON.parse(localStorage.latestLinks)
      }
    },
    handleKeyDown(event) {
      if (event.key === 'Enter') {
        this.generateLink()
      }
    },
    generateLink() {
      console.log('Generating link!', this.input)

      this.input = this.input.replace(/https?:\/\//, '')

      fetch('http://localhost:1337/generate', {
        method: 'POST',
        body: JSON.stringify({ url: this.input }),
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => res.json())
        .catch(err => console.log('response error', err))
        .then(res => vue.gotNewLink(JSON.parse(res).tiny))
    },
    gotNewLink(url) {
      this.latestURL = serverURL + url

      if (this.latestLinks.length > 9) this.latestLinks.pop()
      
      this.latestLinks.unshift(this.latestURL)

      window.localStorage.latestLinks = JSON.stringify(this.latestLinks)
      console.log('Storage!', window.localStorage)
    }
  }
})

window.addEventListener('load', vue.setup)
