let expect = require("expect");

let { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    let from = "Ray";
    let text = "Hello there";
    let res = generateMessage(from, text);

    expect(res).toMatchObject({ from, text });
    expect(typeof res.createdAt).toBe("number");
  });
});

describe("generateLocationMessage", () => {
  it("should generate correct location object", () => {
    let from = "Joe";
    let latitude = "35";
    let longitude = "60";
    let url = "https://www.google.com/maps?q=35,60";
    let res = generateLocationMessage(from, latitude, longitude);

    expect(res).toMatchObject({ from, url });
    expect(typeof res.createdAt).toBe("number");
  });
});
