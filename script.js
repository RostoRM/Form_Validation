const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

const messageStyling = (text, color1, color2) => {
  message.textContent = text;
  message.style.color = color1;
  messageContainer.style.borderColor = color2;
};

const stylingPasswordsEl = (color1, color2) => {
  password1El.style.borderColor = color1;
  password2El.style.borderColor = color2;
};

const validateForm = () => {
  // using Contraint APi
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    messageStyling('Please fill out all fields!', 'red', 'red');
    return;
  }
  // Check to see if passwords matchs
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    stylingPasswordsEl('green', 'green');
  } else {
    passwordsMatch = false;
    messageStyling('Make sure passwords match!', 'red', 'red');
    stylingPasswordsEl('red', 'red');
    return;
  }
  // If form is valid and passwords match
  isValid && passwordsMatch ? messageStyling('Successfully Registered!', 'green', 'green') : false;
};

const storeFormData = () => {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
};

const processFormData = (e) => {
  e.preventDefault();
  validateForm();
  isValid && passwordsMatch ? storeFormData() : false;
};

//Event Listener
form.addEventListener('submit', processFormData);
