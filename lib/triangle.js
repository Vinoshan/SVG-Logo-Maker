const Shape = require("./Shape");

class Triangle extends Shape {
  render() {
    const points = "150,18 244,182 56,182";
    return `<polygon points="${points}" fill="${this.shapeColor}" />
            <text x="49%" y="60%" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Triangle;
