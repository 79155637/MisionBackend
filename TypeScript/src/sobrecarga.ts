interface Figura{
  getArea: () => number
}

class Rectangulo implements Figura {
  //protected meaning is that variable "ancho"and "alto" (in this case) you can use only in this class
  public constructor(protected readonly ancho: number, protected readonly alto: number){}
  public getArea(): number{
    return this.ancho * this.alto;
  }
  public toString(): string{
    return `Rectangulo con ancho de ${this.ancho} y alto ${this.alto} con Area de ${this.getArea()}`
  }
}

class Cuadrado extends Rectangulo{
  public constructor(ancho: number){
    super(ancho, ancho);
  }
  public override toString(): string {
    return `Cuadrado con lados de ${this.ancho} y Area de ${this.getArea()}`
  }
}

let rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.toString());

let cuadro = new Cuadrado(5);
console.log(cuadro.toString())