const Shape = require("./Shape");

class Square extends Shape {
  render() {
    return `<rect x="100" y="40" width="100" height="100" fill="${this.shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Square;
