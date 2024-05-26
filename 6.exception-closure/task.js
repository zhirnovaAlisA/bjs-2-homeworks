function parseCount(amount){
    try {
        let amountNumber = Number.parseFloat(amount);
        if (isNaN(amountNumber)){
          throw new Error("Невалидное значение")
        }
        return amountNumber
    }catch(error){
        throw Error("Невалидное значение")
    }
  }
  
  function validateCount(amount){
    try {
        return parseCount(amount)
    }catch(error){
      return error
    }
  }
  
// Задача 2

class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a >= this.b + this.c) || (this.b >= this.a + this.c) || (this.c >= this.b + this.a)){
          throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    get perimeter(){
      return this.a + this.b + this.c
    }
    get area(){
      return +(((this.perimeter / 2) * (this.perimeter/2 - this.a) * (this.perimeter/2 - this.b) * (this.perimeter/2 - this.c))**0.5).toFixed(3)
    }
}

function getTriangle(a, b, c){
  try{
    return new Triangle(a, b, c)
  }catch(error){
    return{
      get area(){
        return "Ошибка! Треугольник не существует"
      },
      get perimeter(){
        return "Ошибка! Треугольник не существует"
      },
    }
  }
}