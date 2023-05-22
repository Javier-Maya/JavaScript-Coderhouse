// Simulación sobre depositar o retirar dólares de un banco

// Se declaran las variables
let saldo = 1000; // Saldo inicial
let usuarioAutenticado = false; // Estado de autenticación del usuario

// Función para iniciar sesión
function iniciarSesion() {
  const usuario = prompt("Ingrese su nombre de usuario");
  const contraseña = prompt("Ingrese su contraseña");

  // Verificar las credenciales del usuario (puedes modificar esta lógica según tus necesidades)
  if (usuario === "usuario" && contraseña === "123") {
    usuarioAutenticado = true;
    alert("Inicio de sesión exitoso. ¡Bienvenido!");
  } else {
    alert("Credenciales inválidas. Inténtelo de nuevo.");
  }
}

// Función para retirar dinero
function retirarDinero() {
  if (usuarioAutenticado) {
    const cantidad = Number(prompt(`Su saldo actual es de ${saldo} dólares. Ingrese la cantidad a retirar`));

    // Verificar si hay suficiente saldo para realizar el retiro
    if (cantidad <= saldo) {
      saldo -= cantidad;
      alert(`Retiro exitoso. Su nuevo saldo es de ${saldo} dólares.`);
    } else {
      alert("Saldo insuficiente para realizar el retiro.");
    }
  } else {
    alert("Debe iniciar sesión primero.");
  }
}

// Función para depositar dinero
function depositarDinero() {
  if (usuarioAutenticado) {
    const cantidad = Number(prompt(`Su saldo actual es de ${saldo} dólares. Ingrese la cantidad a depositar`));

    // Verificar que la cantidad sea válida
    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Ingrese una cantidad válida.");
    } else {
      saldo += cantidad;
      alert(`Cantidad agregada exitosamente. Su nuevo saldo es de ${saldo} dólares.`);
    }
  } else {
    alert("Debe iniciar sesión primero.");
  }
}

// Función para preguntar al usuario qué operación desea realizar
const preguntaSeleccion=()=>{
    let eleccion = prompt("Que desea hacer: \n 1 - Retirar dinero \n 2 - Depositar dinero")
    return Number(eleccion)
}
const selector=(eleccion)=>{
    // Realizar la operación correspondiente en función de la opción elegida
    switch(eleccion){
        case 1:
            // Retirar el dinero
            retirarDinero()
            break
        case 2:
            // Depositar el dinero
            depositarDinero()
            break
        default:
            alert("Opción inválida. Inténtelo de nuevo.")
    }
}

const inicializar = ()=>{
    do{
        iniciarSesion()
        if(usuarioAutenticado){break}
    } while(usuarioAutenticado)

    if(usuarioAutenticado){
        let loop = true
        do{
            selector(preguntaSeleccion())
            loop = confirm("¿Desea continuar?")
        } while(loop)
    }
}

// Se llama la función para que ejecute todo el código
inicializar();