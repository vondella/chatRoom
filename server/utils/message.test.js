const { generateMethod } = require("./message");
describe("generateMessage", () => {
  it("should generate correct message object", () => {
    const from = "abui";
    const text = "hi there";
    const message = generateMethod(from, text);
    expect(message).toMatchObject({ from, text });
  });
});
