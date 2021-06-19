const nameField = document.getElementById('fullname');
const emailField = document.getElementById('email');
const passwordHTML = document.getElementById('password');
const ruleLength = document.getElementById('ruleLength');
const ruleChar = document.getElementById('ruleChar');
const ruleSequence = document.getElementById('ruleSequence');
const submitBtn = document.getElementById('submit');
let nameHasValue = false;
let emailHasValue = false;
let rule1 = false;
let rule2 = false;
let rule3 = true;

const eye = document.getElementById('eye');
const eyeClosed = document.getElementById('eyeClosed');

function enableSubmit() {
  verifyHasName();
  verifyHasEmail();
  verifyPassword();

  if (nameHasValue && emailHasValue && rule1 && rule2 && rule3) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('active');
  } else {
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.classList.remove('active');
  }
  
}

function verifyPassword() {
  passwordLengthRule()
  passwordCharRule()
  passwordSequenceRule()
}

function passwordLengthRule() {
  const password = passwordHTML.value
  if (password.length >= 8 && password.length <=14) {
    ruleLength.firstChild.innerHTML = 'check_circle_outline';
    ruleLength.style.setProperty('color', '#26e726');
    rule1 = true;
  } else {
    ruleLength.firstChild.innerHTML = 'highlight_off';
    ruleLength.style.setProperty('color', '#ff0000');
    rule1 = false;
  }

  if (password.length > 0) {
    eye.style.setProperty('visibility', 'visible');
  } else {
    eye.style.setProperty('visibility', 'hidden');
    eyeClosed.style.setProperty('visibility', 'hidden');
    passwordHTML.setAttribute('type', 'password');
  }
}

function passwordCharRule() {
  const password = passwordHTML.value;

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const special = '@!*#~';

  for (let i = 0; i < password.length; i++) {
    if (uppercase.indexOf(password.charAt(i)) >= 0) {
      hasUpper = true;
    } else if (lowercase.indexOf(password.charAt(i)) >= 0) {
      hasLower = true;
    } else if (numbers.indexOf(password.charAt(i)) >= 0) {
      hasNumber = true;
    } else if (special.indexOf(password.charAt(i)) >= 0) {
      hasSpecial = true;
    }
  }

  const arrayChar = [hasUpper, hasLower, hasNumber, hasSpecial];
  const char = document.getElementsByClassName('char');
  for (let y = 0; y < arrayChar.length; y++) {
    if (arrayChar[y] == true) {
      char[y].style.setProperty('color', '#26e726');
    } else {
      char[y].style.setProperty('color', '#ff0000');
    } 
  }

  if (hasUpper && hasLower && hasNumber && hasSpecial) {
    ruleChar.firstChild.innerHTML = 'check_circle_outline';
    ruleChar.style.setProperty('color', '#26e726');
    rule2 = true;
  } else {
    ruleChar.firstChild.innerHTML = 'highlight_off';
    ruleChar.style.setProperty('color', '#ff0000');
    rule2 = false;
  }
}

function passwordSequenceRule() {
  const passwordValue = passwordHTML.value;
  let hasSequence = false;
  let sequence = '';
  let slicedPassword = '';

  if (passwordValue.length >= 4) {
    for (let i = 0; i < passwordValue.length - 2; i++) {
      sequence = passwordValue.slice(i, i+2);
      slicedPassword = passwordValue.slice(i+2);

      if (slicedPassword.indexOf(sequence) >= 0) {
        hasSequence = true;
      }
    }
  }

  if (hasSequence == true) {
    ruleSequence.firstChild.innerHTML = 'highlight_off';
    ruleSequence.style.setProperty('color', '#ff0000');
    rule3 = false;
  } else {
    ruleSequence.firstChild.innerHTML = 'check_circle_outline';
    ruleSequence.style.setProperty('color', '#26e726');
    rule3 = true;
  }
}

function verifyHasName() {
  if (nameField.value.length > 0) {
    nameHasValue = true;
  } else {
    nameHasValue = false;
  }
}

function verifyHasEmail() {
  if (emailField.value.length > 0) {
    emailHasValue = true;
  } else {
    emailHasValue = false;
  }
}

eye.addEventListener('click', () => {
  eye.style.setProperty('visibility', 'hidden');
  eyeClosed.style.setProperty('visibility', 'visible');
  passwordHTML.setAttribute('type', 'text');
})

eyeClosed.addEventListener('click', () => {
  eyeClosed.style.setProperty('visibility', 'hidden');
  eye.style.setProperty('visibility', 'visible');
  passwordHTML.setAttribute('type', 'password');
})