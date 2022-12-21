import { UserContactInfo } from "./types";

function printContactInfo(info: UserContactInfo){
  console.log(info)
  console.log(info.email)
}

const mama = {
  nombre: "Mari",
  email: "contacto@innovaccion.mx",
  colorfavorito: "Blanco"
}

printContactInfo(mama)