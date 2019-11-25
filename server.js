const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const base62 = require("base62");

const { validateUrl, makeTinyUrl } = require("./utils");

const STATUS_CODES = {
  REDIRECT: 302,
  BAD_REQUEST: 400
};

const PORT = 1337;

const app = express();

// let counter = 0;
let counter = base62.decode("001337");
const links = {};

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/:tinyurl", redirect);
app.post("/generate", generate);

app.listen(PORT, function() {
  console.log(
    "Pontus Link Shortener started on localhost:" + PORT,
    "at",
    new Date().toLocaleTimeString()
  );
});

function redirect(req, res) {
  const tiny = req.params.tinyurl;
  let url = links[tiny];

  if (!url) {
    return res.redirect(STATUS_CODES.REDIRECT, "/");
  }

  return res.redirect(STATUS_CODES.REDIRECT, url);
}

function generate(req, res) {
  let url = req.body.url;

  if (!url) {
    console.log("Error, url missing");
    return res.status(STATUS_CODES.BAD_REQUEST).send("Error, url missing");
  }

  const isValidUrl = validateUrl(url);
  if (!isValidUrl) {
    console.log("Error, url format invalid");
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .send("Error, url format invalid");
  }

  // prepend https if protocol is missing
  if (!/^https?:\/\//.test(url)) {
    url = "https://" + url;
  }

  const tiny = makeTinyUrl(counter++);
  links[tiny] = url;
  res.json(
    JSON.stringify({
      tiny: tiny
    })
  );
}
