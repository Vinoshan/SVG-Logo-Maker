const Shape = require("./Shape");

class Square extends Shape {
  render() {
    const size = 150;
    const x = (300 - size) / 2;
    const y = (200 - size) / 2;

    return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${this.shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Square;
