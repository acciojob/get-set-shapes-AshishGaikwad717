// Rectangle Class
class Rectangle {
  constructor(width, height) {
    this.width = width; // Initialize width
    this.height = height; // Initialize height
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Setter for width
  set width(value) {
    this._width = value;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Setter for height
  set height(value) {
    this._height = value;
  }

  // Method to calculate area
  getArea() {
    return this.width * this.height;
  }
}

// Square Class
class Square extends Rectangle {
  constructor(side) {
    super(side, side); // A square's width and height are equal
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width; // Or 4 * this.height, as they are the same
  }
}

// Example Usage
const rectangle = new Rectangle(5, 10);
console.log(`Rectangle Width: ${rectangle.width}`);
console.log(`Rectangle Height: ${rectangle.height}`);
console.log(`Rectangle Area: ${rectangle.getArea()}`);

const square = new Square(7);
console.log(`Square Side: ${square.width}`);
console.log(`Square Area: ${square.getArea()}`);
console.log(`Square Perimeter: ${square.getPerimeter()}`);

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
