let form = document.getElementById("form");
let user = document.getElementById("user");
let tlf = document.getElementById("tlf");
let contr = document.getElementById("contr");
let repContr = document.getElementById("rep-contr");
let check = document.getElementById("check");
let enviar = document.getElementById("enviar");

let validUser = false;
let validTlf = false;
let validContr = false;
let validRepContr = false;
let checked= false;
let regexUser = /^[a-zA-Z ]{1,20}$/;
let regexContr = /^[a-zA-Z0-9]{6,}$/;
let regexTlf = /^[679]{1}[0-9]{8}$/;

user.addEventListener("blur", validarUser);
tlf.addEventListener("blur", validarTlf);
contr.addEventListener("blur", validarContr);
repContr.addEventListener("blur", validarRepContr);
check.addEventListener("click", isChecked);

function checkFullForm(){
    if(validUser && validTlf && validContr && validRepContr && checked){
        enviar.classList.remove("notAvailable");
    }else{
        enviar.classList = "notAvailable";
    }
}

function validarUser(){
    validUser = regexUser.test(user.value);
    user.className = validUser ? "success" : "error";

    if(!validUser){
        user.parentNode.getElementsByTagName("small")[0].innerHTML = "Nombre con sólo letras y espacios";
    }else{
        user.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    checkFullForm();
}

function validarTlf(){
    validTlf = regexTlf.test(tlf.value);
    tlf.className = validTlf ? "success" : "error";

    if(!validTlf){
        tlf.parentNode.getElementsByTagName("small")[0].innerHTML = "El número de teléfono no es válido";
    }else{
        tlf.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    checkFullForm();
}

function validarContr(){
    validContr = regexContr.test(contr.value);
    contr.className = validContr ? "success" : "error";

    if(!validContr){
        contr.parentNode.getElementsByTagName("small")[0].innerHTML = "Contraseña con 6 o más carácteres";
    }else{
        contr.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    checkFullForm();
}

function validarRepContr(){
    if(contr.value === repContr.value){
        validRepContr = true;
    }else{
        validRepContr = false;
    }

    repContr.className = validRepContr ? "success" : "error";

    if(!validRepContr){
        repContr.parentNode.getElementsByTagName("small")[0].innerHTML = "Las contraseñas no coinciden";
    }else{
        repContr.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    checkFullForm();
}

function isChecked() {
    if(check.checked) {
      enviar.parentNode.getElementsByTagName("small")[0].innerHTML = "";
      checked = true;
    } else {
      enviar.parentNode.getElementsByTagName("small")[0].innerHTML = "Las condiciones deben ser aceptas";
      checked = false;
    }

    checkFullForm();
}

form.addEventListener('submit', event => {
    event.preventDefault();

    alert("Enviado");
  });