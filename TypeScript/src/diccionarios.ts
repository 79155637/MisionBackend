//Index signature

//The way of JavaScript
const telefonos = {
  casa: {
    pais: "+52",
    area: "552",
    numero: "1527721",
  },
  trabajo: {
    pais: "+1",
    area: "331",
    numero: "1234567",
  }
}
// Here is strongly typed version and use an array, is and characteristic that can be used in TypeScript
let telsScrypt: {
  [k: string]: {
    pais: string;
    area: string;
    numero: string;
  };
} = {
  casa: {
    pais: "+52",
    area: "552",
    numero: "1527721",
  },
  trabajo: {
    pais: "+1",
    area: "331",
    numero: "1234567",
  }
}

console.log(telefonos)
console.log(telsScrypt)