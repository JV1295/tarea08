const usuario = $("#txtUsuario");
const valusuario = $("#valusuario");

const nombre = $("#txtNombre");
const valnombre = $("#valnombre");

const contrasena = $("#txtContrasena");
const valcontrasena = $("#valcontrasena");

const repeticion = $("#txtrepeticion");
const valrepeticion = $("#valrepeticion");

const correo = $("#txtcorreo");
const valcorreo = $("#valcorreo");

const celular = $("#txtcelular");
const valcelular = $("#valcelular");

const enviar = $("#btnEnviar");

function Validar() {
  let iusu = usuario.val();
  let expRegiUsu = new RegExp("^[a-zA-Z0-9_]{4,16}$");
  valusuario.text("");

  let nom = nombre.val();
  let expRegNom = new RegExp("^[A-Zña-zñ ]*$");
  valnombre.text("");

  let cont = contrasena.val();
  let expRegCont = new RegExp("^[0-9]{8}$");
  valcontrasena.text("");

  let repet = repeticion.val();
  valrepeticion.text("");

  let corr = correo.val();
  let expRegCorr = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  valcorreo.text("");

  let celu = celular.val();
  let expRegCelu = new RegExp("^[0-9]{9}$");
  valcelular.text("");

  if (iusu == "" || !expRegiUsu.test(iusu)) {
    valusuario.text("El usuario debe tener de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo");
  }
  if (nom == "" || !expRegNom.test(nom)) {
    valnombre.text("El nombre no es válido");
  }
  if (cont == "" || !expRegCont.test(cont)) {
    valcontrasena.text("La contraseña debe contener 8 números");
  }
  if (repet !== cont) {
    valrepeticion.text("Las contraseñas deben ser iguales");
  }
  if (corr == "" || !expRegCorr.test(corr)) {
    valcorreo.text("El correo no es válido");
  }
  if (celu == "" || !expRegCelu.test(celu)) {
    valcelular.text("El número debe tener 9 dígitos");
  }

}

enviar.click(function () {
  Validar()
})