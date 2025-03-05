let inputNombre=document.getElementById("nombre")
let inputCedula=document.getElementById("cedula")
let inputAsistencia=document.getElementById("asistencia")
let boton=document.getElementById("boton")

//detectando eventos de click en pantalla 
//Un evento es una interaccion de usuario (humano) con el codigo (la pagina web)
boton.addEventListener("click",function(evento){
    
//1. se inicia desactivando el comportamiento por defecto
    evento.preventDefault()

//2. probamos que el evento se esta escuchando con exito 
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    })