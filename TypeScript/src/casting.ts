let x: string = 'hola'

function saludar(saludo: number){
  console.log(saludo)
}

// To force the casting first transform the variable to unknown and then you can tranform in what ever you want
saludar((x as unknown) as number)