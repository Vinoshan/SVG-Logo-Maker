class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    // Abstract method to be implemented in child classes
    throw new Error("Method 'render()' must be implemented.");
  }
}

module.exports = Shape;
