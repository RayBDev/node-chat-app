let expect = require("expect");

let { generateMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    let from = "Ray";
    let text = "Hello there";
    let res = generateMessage(from, text);

    expect(res).toMatchObject({ from, text });
    expect(typeof res.createdAt).toBe("number");
  });
});
