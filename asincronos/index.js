http = require('http');
console.log("Hola");
http.get('http://httpstat.us/200', (res)=>{
  console.log(`La API devolvio: ${res.statusCode}`);
});
console.log("Adios");