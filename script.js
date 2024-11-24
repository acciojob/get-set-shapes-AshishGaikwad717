//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}

	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}

	getArea() {
    return this.width * this.height;
    }
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}

	getPerimeter(){
		return 4 * this.width;
	}
}

const rectangle = new Rectangle(10, 5);
console.log(`Rectangle Width: ${rectangle.width}`);
console.log(`Rectangle Height: ${rectangle.height}`);
console.log(`Rectangle Area: ${rectangle.getArea()}`);

const square = new Square(4);
console.log(`Square Side: ${square.width}`);
console.log(`Square Area: ${square.getArea()}`);
console.log(`Square Perimeter: ${square.getPerimeter()}`)
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
