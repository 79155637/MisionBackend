interface Animal{
  isAlive: boolean
}

//With "extend" we can use what is inside the extended interface
interface Mamifero extends Animal{
  getColorPelo(pelo: string): string
}

interface Perro extends Mamifero{
  getEspecie(): string
}

function acariciarAnimal(dog: Perro){
  dog.getColorPelo("cafe")
}

//With "implement" you must use what is inside
class Gato implements Mamifero {
  
  isAlive: boolean;
  maullar() {
    return "miau"
  }
  getColorPelo(pelo: string) {
    return pelo
  }
}