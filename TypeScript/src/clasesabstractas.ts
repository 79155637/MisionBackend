// An abstract class is uses as a base for other classes
//Is like the interface, but we can give funcionality

abstract  class Poligono{
  public abstract getArea() : number;
}

class Rectangulo extends Poligono{
  public constructor(protected readonly ancho: number, protected readonly alto: number){
    super()
  }
  
  public getArea(): number{
    return this.ancho * this.alto;

  }
}