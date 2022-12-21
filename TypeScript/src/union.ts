//In this function is possible to receive two different types of data
function printStatusCode(code: number | string){
  console.log(`Mi status code es ${code}`);
}

printStatusCode(404)
printStatusCode("404")