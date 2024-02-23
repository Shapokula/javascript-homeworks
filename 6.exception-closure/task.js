function parseCount(value) {
	let parsed = Number.parseFloat(value);
	if (Number.isNaN(parsed)) {
		throw new Error("Невалидное значение");
	}
	return parsed;
}

function validateCount(value) {
	try {
		parsed = parseCount(value);
	} catch (error) {
		return error;
	}
	return parsed;
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let p = this.perimeter / 2;
		return +Math.pow(p * (p - this.a) * (p - this.b) * (p - this.c), 0.5, ).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch {
		return {
			get area() {
				return ("Ошибка! Треугольник не существует");
			},

			get perimeter() {
				return ("Ошибка! Треугольник не существует");
			}
		};
	}
}