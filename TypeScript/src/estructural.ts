//The definitions in TypeScript are structural

class Car{
  fabricante: string
  modelo: string
  anho: number
  isElectric: boolean
}

class Trailer{
  fabricante: string
  modelo: string
  anho: number
  capacidad: number
}
const vehicule= {
  fabricante: "Ford",
  modelo: "Fiesta",
  anho: 2022
}

function printCar(car:{
  fabricante: string
  modelo: string
  anho: number
}) {
  console .log(`${car.fabricante} ${car.modelo} ${car.anho}`)
}

printCar(new Car())
printCar(new Trailer ())
printCar(vehicule)