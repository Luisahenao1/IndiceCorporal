//alert("estoy vinculado")

let inputPesoUsuario=document.getElementById("pesousuario")
let inputAlturaUsuario=document.getElementById("alturausuario")
let botonFormulario=document.getElementById("boton")


//detectando eventos de click en pantalla 
//Un evento es una interaccion de usuario (humano) con el codigo (la pagina web)
botonFormulario.addEventListener("click",function(evento){

//1. se inicia desactivando el comportamiento por defecto
evento.preventDefault()

//2. probamos que el evento se esta escuchando con exito 
//3. Creamos variables para almacenar los 
//datos del usuario
let estaturaUsuario=inputAlturaUsuario.value
let pesoUsuario=inputPesoUsuario.value

//4.Se crea una variablr para el resultado
let resultado=document.getElementById("resultado")

//5.se modifica el resultado con los value

//6. se calcula lo pedido
let calculoIMC=pesoUsuario/(estaturaUsuario*estaturaUsuario)
//6A.se crea variable para almacenar la imagen
let imagen=document.getElementById("foto")

//7.se debe decidir sobre el resultado
if(calculoIMC<18.5){
  resultado.textContent="Estas en bajo peso"
  imagen.src="./img/bajopeso.png"
}
else if(calculoIMC>=18-5 && calculoIMC<24.9){
  resultado.textContent="Tu peso es normal"
  imagen.src="./img/normal.png"
}
else if(calculoIMC>=24.9 && calculoIMC<29.9){
  resultado.textContent="Controla tu forma de alimentarte,tienes sobrepeso"
}
else if(calculoIMC>=29.9 && calculoIMC<34.9){
  resultado.textContent="No consumas comida chatarra, estas obes@"
}
else{
  resultado.textContent="San pedro te espera, ya no te circula sangre sino grasa"
}


/*Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });*/
})