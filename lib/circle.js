const Shape = require("./Shape");

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="90" r="80" fill="${this.shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Circle;
