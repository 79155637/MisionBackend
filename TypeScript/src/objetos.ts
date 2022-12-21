//An Object in Javascript
let car = {
  fabricante: "Toyota",
  modelo: "Prius",
  anho: 2022
}
let car1 = {
  fabricante: "Toyota",
  modelo: "Prius",
  anho: 2022,
  color: "rojo"
}

//An Object in Typescript
let carroTypescript: {
  fabricante: string,
  modelo: string,
  anho: number
  color: string 
}

function getCar(car: {
  fabricante: string,
  modelo: string,
  anho: number,
  color?: string //this field is optional, if it doesn't exist send "undefined"
}){
  console.log(`${car.fabricante} ${car.modelo} ${car.anho} ${car.color}`)
}

function getCar1(
  car: {
    fabricante: string,
    modelo: string,
    anho: number,
    color?: string //this field is optional, if it doesn't exist send "undefined"
  }){
    let str = ""
    if (typeof car.color === "undefined")
      str = `${car.fabricante} ${car.modelo} ${car.anho}`
    else
      str = `${car.fabricante} ${car.modelo} ${car.anho} ${car.color}`

    console.log(str)
  }


getCar(car)// write "undefined" if the color doesn.t exist
getCar1(car) // If color is "undefined" then doesn't write it but the program function with color?:string

getCar(car1)
getCar1(car1)