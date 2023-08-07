const Shape = require("./Shape");

class Circle extends Shape {
  render() {
    const centerX = 150;
    const centerY = 100;
    const radius = 80;

    return `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${this.shapeColor}" />
            <text x="${centerX}" y="${centerY}" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Circle;
