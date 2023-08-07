const Shape = require("./Shape");

class Triangle extends Shape {
  render() {
    const points = "150,30 275,180 25,180";
    return `<polygon points="${points}" fill="${this.shapeColor}" />
            <text x="50%" y="65%" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Triangle;
