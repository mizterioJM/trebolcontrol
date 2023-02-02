const button = document.getElementById('formButton');
const fullName = document.getElementById('fullName');
const errorFullName = document.getElementById('error__fullName');
const phone = document.getElementById('phone');
const errorPhone = document.getElementById('error__phone');
const email = document.getElementById('email');
const errorEmail = document.getElementById('error__email');
const message = document.getElementById('message');
const errorMessage = document.getElementById('error__message');

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  if (!fullName.value) {
    fullName.style.outline = '3px solid rgb(239,68,68)';
    fullName.style.outlineOffset = '2px';
    errorFullName.innerHTML = 'Ingrese nombre.';
    return;
  }

  if (!isNumber(phone.value)) {
    phone.style.outline = '3px solid rgb(239,68,68)';
    phone.style.outlineOffset = '2px';
    errorPhone.innerHTML = 'Ingrese numero valido.';
    return;
  }

  if (!isEmail(email.value)) {
    email.style.outline = '3px solid rgb(239,68,68)';
    email.style.outlineOffset = '2px';
    errorEmail.innerHTML = 'Ingrece correo valido.';
    return;
  }

  if (!message.value) {
    message.style.outline = '3px solid rgb(239,68,68)';
    message.style.outlineOffset = '2px';
    errorMessage.innerHTML = 'Ingrese un mensaje.';
    return;
  }

  button.innerHTML = 'Enviando...';
  button.disabled = true;
  button.style.backgroundColor = '#9ca3af';

  const serviceID = 'service_h64bvgj';
  const templateID = 'template_kmq0w9c';

  console.log(this);

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      button.innerHTML = 'Mensaje Enviado!';
      fieldsValid();
      alert('Enviado!');
    },
    (err) => {
      button.innerHTML = 'Enviar';
      button.disabled = false;
      button.style.backgroundColor = 'var(--c-secondary)';
      alert('Ocurrio un error.');
    }
  );
});

function isNumber(value) {
  return !isNaN(value);
}

function isEmail(value) {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return validEmail.test(value);
}

function fieldsValid() {
  fullName.style.outlineColor = '#f9fafb';
  fullName.clear();
  phone.style.outlineColor = '#f9fafb';
  phone.clear();
  email.style.outlineColor = '#f9fafb';
  email.clear();
  message.style.outlineColor = '#f9fafb';
  message.clear();
}
