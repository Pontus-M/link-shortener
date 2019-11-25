const assert = require("assert");

const { makeTinyUrl, validateUrl } = require("./utils");

describe("makeTinyUrl", () => {
  it("converts numbers to keys correctly", () => {
    const cases = [
      {
        input: 0,
        expected: "000000"
      },
      {
        input: 1,
        expected: "000001"
      },
      {
        input: 10,
        expected: "00000a"
      },
      {
        input: 36,
        expected: "00000A"
      },
      {
        input: 56800235583,
        expected: "ZZZZZZ"
      }
    ];

    cases.forEach(({ input, expected }) => {
      const result = makeTinyUrl(input);

      assert.equal(result.length, 6);
      assert.equal(result, expected, `failed making tiny for ${input}`);
    });
  });
});

describe("validateUrl", () => {
  it("accepts valid urls", () => {
    const validInputs = [
      "example.com",
      "www.example.com",
      "http://example.com",
      "https://example.com",
      "https://www.example.com"
    ];

    validInputs.forEach(input => {
      const result = validateUrl(input);

      assert.equal(result, true, `failed validation for "${input}"`);
    });
  });

  it("rejects invalid urls", () => {
    const invalidInputs = [
      "example",
      "example@com",
      "http://example",
    ];

    invalidInputs.forEach(input => {
      const result = validateUrl(input);

      assert.equal(result, false, `failed validation for "${input}"`);
    });
  });
});
