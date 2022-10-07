// USER INPUT VALIDATION FILE

function isValidFirstName(value) {
  const usernameRegex = /^[A-z][A-z0-9-_]{3,23}$/;
  return usernameRegex.test(String(value).toLowerCase());
}
function isValidLastName(value) {
  const usernameRegex = /^[A-z][A-z0-9-_]{3,23}$/;
  return usernameRegex.test(String(value).toLowerCase());
}

function isValidEmail(value) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(value).toLowerCase());
}

function isValidPassword(value) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  return passwordRegex.test(String(value));
}
// function isValidConfirmPassword(value, password) {
//   return value === password;
// }
function isValidMobileNumber(value) {
  return value.length === 10;
}

function validateFirstName(value, setFirstNameError) {
  if (value === "") {
    setFirstNameError("");
  } else if (isValidFirstName(value)) {
    setFirstNameError("");
  } else {
    setFirstNameError("Invalid Input");
  }
}
function validateLastName(value, setLastNameError) {
  if (value === "") {
    setLastNameError("");
  } else if (isValidLastName(value)) {
    setLastNameError("");
  } else {
    setLastNameError("Invalid Input");
  }
}

function validateEmail(value, setEmailError) {
  if (value === "") {
    setEmailError("");
  } else if (isValidEmail(value)) {
    setEmailError("");
  } else {
    setEmailError("Invalid Email");
  }
}

function validatePassword(value, setPasswordError) {
  if (value === "") {
    setPasswordError("");
  } else if (isValidPassword(value)) {
    setPasswordError("Password must be at least 8 characters");
  } else {
    setPasswordError("");
  }
}
// function validateConfirmPassword(value, setConfirmPasswordError) {
//   if (value === "") {
//     setConfirmPasswordError("");
//   } else if (isValidConfirmPassword(value)) {
//     setConfirmPasswordError("Passwords must match");
//   } else {
//     setConfirmPasswordError("");
//   }
// }

function validateMobileNumber(value, setMobileNumberError) {
  if (value === "") {
    setMobileNumberError("");
  } else if (isValidMobileNumber(value)) {
    setMobileNumberError("");
  } else {
    setMobileNumberError("Invalid Mobile Number");
  }
}
const validateInput = {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  // validateConfirmPassword,
  validateMobileNumber,
};

export default validateInput;
