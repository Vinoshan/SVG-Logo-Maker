const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/Circle.js");
const Triangle = require("./lib/Triangle.js");
const Square = require("./lib/Square.js");

const shapeChoices = ["Circle", "Triangle", "Square"];

const promptUserForLogoDetails = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the text:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (color keyword or hexadecimal number):",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: shapeChoices,
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (color keyword or hexadecimal number):",
    },
  ]);

  return answers;
};

const generateSVGCode = (shape, text, textColor, shapeColor) => {
  let svgCode;

  switch (shape) {
    case "Circle":
      svgCode = new Circle(text, textColor, shapeColor).render();
      break;
    case "Triangle":
      svgCode = new Triangle(text, textColor, shapeColor).render();
      break;
    case "Square":
      svgCode = new Square(text, textColor, shapeColor).render();
      break;
    default:
      throw new Error("Invalid shape selected.");
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${svgCode}
    </svg>`;
};

const saveSVGToFile = (svg) => {
  fs.writeFileSync("logo.svg", svg);
  console.log("Generated logo.svg");
};

const main = async () => {
  try {
    const { text, textColor, shape, shapeColor } =
      await promptUserForLogoDetails();
    const svgCode = generateSVGCode(shape, text, textColor, shapeColor);
    saveSVGToFile(svgCode);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

main();
