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
let rule3 = false;

function enableSubmit() {
  verifyHasName();
  verifyHasEmail();
  verifyPassword();

  if (nameHasValue && emailHasValue) {
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
    rule1 = true;
  } else {
    ruleChar.firstChild.innerHTML = 'highlight_off';
    ruleChar.style.setProperty('color', '#ff0000');
    rule1 = false;
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