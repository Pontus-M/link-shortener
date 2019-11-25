const base62 = require("base62");

function makeTinyUrl(count) {
  return base62.encode(count).padStart(6, 0);
}

// input url has to contain a dot with any character before and after
const validUrlFormat = /.\../;
function validateUrl(string) {
  return validUrlFormat.test(string);
}

module.exports = {
  makeTinyUrl,
  validateUrl
};
