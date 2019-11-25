// input url has to contain a dot with any character before and after
const validUrlFormat = /.\../;

export function validateUrl(string) {
  return validUrlFormat.test(string);
}
