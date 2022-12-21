interface UserInfo {
  nombre: string;
  email: string;
}

function printUserInfo(info: UserInfo) {
  console.log(info)
  console.log(info.email)
}

const mama = {
  nombre: "Mari",
  email: "contacto@innovaccion.mx",
  colorfavorito: "Blanco"
}

printUserInfo(mama)