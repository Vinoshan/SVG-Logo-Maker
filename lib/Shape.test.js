const Circle = require("./Circle");
const Triangle = require("./Triangle");
const Square = require("./Square");

describe("Circle", () => {
  test("it should render a circle SVG", () => {
    const circle = new Circle("C", "blue", "red");
    const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red" />
            <text x="50%" y="50%" text-anchor="middle" font-size="40" fill="blue">C</text>`;
    expect(circle.render()).toEqual(expectedSVG);
  });
});

describe("Triangle", () => {
  test("it should render a triangle SVG", () => {
    const triangle = new Triangle("T", "green", "blue");
    const expectedSVG = `<polygon points="150,30 275,180 25,180" fill="blue" />
            <text x="50%" y="65%" text-anchor="middle" font-size="40" fill="green">T</text>`;
    expect(triangle.render()).toEqual(expectedSVG);
  });
});

describe("Square", () => {
  test("it should render a square SVG", () => {
    const square = new Square("S", "yellow", "purple");
    const expectedSVG = `<rect x="75" y="50" width="150" height="150" fill="purple" />
            <text x="50%" y="50%" text-anchor="middle" font-size="40" fill="yellow">S</text>`;
    expect(square.render()).toEqual(expectedSVG);
  });
});
