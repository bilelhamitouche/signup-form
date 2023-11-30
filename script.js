
const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");
const first = document.querySelector("#first_name");
const firstError = document.querySelector("#first_name + span.error");
const last = document.querySelector("#last_name");
const lastError = document.querySelector("#last_name + span.error");
const pass = document.querySelector("#pass");
const passError = document.querySelector("#pass + span.error");
const confirmPass = document.querySelector("#confirm_pass");
const confirmPassError = document.querySelector("#confirm_pass + span.error");

form.addEventListener("submit", (event) => {
  if (!email.validity.valid || !first.validity.valid || !last.validity.valid || !pass.validity.valid || !confirmPass.validity.valid) {
    showFirstNameError();
    showLastNameError();
    showEmailError();
    showPassError();
    showConfirmPassError();
    event.preventDefault();
    passwordMatch();
  }
});

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; 
    emailError.className = "error"; 
  } else {
    showEmailError();
  }
});

first.addEventListener("input", (event) => {
  if (first.validity.valid) {
    firstError.textContent = ""; 
    firstError.className = "error"; 
  } else {
    showFirstNameError();
  }
});

last.addEventListener("input", (event) => {
  if (last.validity.valid) {
    lastError.textContent = ""; 
    lastError.className = "error"; 
  } else {
    showLastNameError();
  }
});

pass.addEventListener("input", (event) => {
  if (pass.validity.valid) {
    passError.textContent = ""; 
    passError.className = "error"; 
  } else {
    showPassError();
  }
});

confirmPass.addEventListener("input", (event) => {
  passwordMatch();
  if (confirmPass.validity.valid) {
    confirmPassError.textContent = ""; 
    confirmPassError.className = "error"; 
  } else {
    showConfirmPassError();
  }
});

function showFirstNameError() {
  if (first.validity.valueMissing) {
    firstError.textContent = "Please enter your first name";
  }
  firstError.className = "error";
}

function showLastNameError() {
  if (last.validity.valueMissing) {
    lastError.textContent = "Please enter your first name";
  }
  lastError.className = "error";
}

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter an email address";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Enter valid email address";
  }
  emailError.className = "error";
}

function showPassError() {
  if (pass.validity.valueMissing) {
    passError.textContent = "Please enter your password";
  } else if (pass.validity.typeMismatch) {
    passError.textContent = "Enter valid password";
  } else if (pass.validity.tooShort) {
    passError.textContent = "Password must be at least 8 characters";
  }
  passError.className = "error";
}

function showConfirmPassError() {
  if (confirmPass.validity.valueMissing) {
    confirmPassError.textContent = "Please confirm your password";
  } else if (confirmPass.validity.typeMismatch) {
    confirmPassError.textContent = "Enter valid password";
  } else if (confirmPass.validity.tooShort) {
    confirmPassError.textContent = "Password must be at least 8 characters";
  } 
  passError.className = "error";
}

function passwordMatch() {
  if (pass.value != confirmPass.value) {
    confirmPassError.textContent = "Passwords do not match";
    confirmPassError.className = "error";
  }
}
