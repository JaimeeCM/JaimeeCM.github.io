
var imagenes=['../Imagenes/Fitball.jpg','../Imagenes/Horario.jpg','../Imagenes/Contacto.jpg'];
var cont= 0;

function siguiente(slider){
    slider.addEventListener('click', e => {
        let atras = slider.querySelector('.flecha-izquierda');
        let adelante = slider.querySelector('.flecha-derecha');
        let imagenes = slider.querySelector('#imagenes-slider');
        let target = e.target;

        if (target == atras){
            if(cont >0){
                imagenes.src = imagenes[cont - 1];
                cont --;
            }else{
                imagenes.src=imagenes[imagenes.length - 1];
                cont = imagenes.length -1 ;
            }
        }else if( target == adelante){
            if(cont < imagenes.length - 1){
                imagenes.src = imagenes[cont + 1];
                cont ++;
            }else{
                imagenes.src=imagenes[0];
                cont = 0 ;
            }
        }
    });
}

document.addEventListener("DOMcontentLoaded", () =>{
    let slider = document.querySelector('.slider');

    siguiente(slider);
});

function Mensaje(){
    var nombre=document.getElementById('nombre').value;
    var apellidos=document.getElementById('apellidos').value;
    var email=document.getElementById('correo').value;
    var texto=document.getElementById('mensaje').value;

    if (nombre,apellidos,email,texto !=""){
        alert("Gracias por contactarnos!!");
    }else{
        alert("Olvidaste rellenar un campo");
    }
}

function mostrarInfo(){
    var nombre=document.getElementById('nombre').value;
    var apellidos=document.getElementById('apellidos').value;
    var email=document.getElementById('correo').value;
    var texto=document.getElementById('mensaje').value;

    document.getElementById('mostrarInfo').innerHTML="Tus datos introducidos son: "+
    "Nombre= "+nombre +"//"+
    "Apellidos= "+apellidos +"//"+
    "Correo electrónico= "+email +"//"+
    "Mensaje= "+texto +"//"+
    "¡¡Gracias por contactar con nosotros!!";
}

function Login(){
    var usuario=document.getElementById('usuario').value;
    var contraseña=document.getElementById('contraseña').value;

    if (usuario,contraseña !=""){
        alert("Gracias por hacer login!!");
    }else{
        alert("Olvidaste rellenar un campo");
    }
}


