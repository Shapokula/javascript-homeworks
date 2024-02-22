function parseCount(value){
    let parsed = Number.parseFloat(value);
    if (Number.isNaN(parsed)) {
        throw error = new Error("Невалидное значение");
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

class Triangle{
    constructor(a,b,c){
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        let perimeter = this.a + this.b + this.c
        if (isNaN(perimeter)) {
            return ("Ошибка! Треугольник не существует");
        }
        return perimeter;
    }

    get area() {
        let p = this.perimeter / 2;
        let area = +Math.pow(p * (p - this.a) * (p - this.b) * (p - this.c),0.5,).toFixed(3);
        if (isNaN(area)) {
          return "Ошибка! Треугольник не существует";
        }
        return area;
      }
}

function getTriangle(a,b,c) {
     try {
        return new Triangle(a,b,c);
     } catch {
     }
}