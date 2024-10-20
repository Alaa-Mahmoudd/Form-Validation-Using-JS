var fnameLabel = document.querySelector(".fnameLabel");
var fnameInput = document.querySelector(".fnameInput");
var lnameLabel = document.querySelector(".lnameLabel");
var lnameInput = document.querySelector(".lnameInput");
var emailLabel = document.querySelector(".emailLabel ");
var emailInput = document.querySelector(".emailInput");
var phnNumLabel = document.querySelector(".phnNumLabel");
var phnNumInput = document.querySelector(".phnNumInput");
var passwordLabel = document.querySelector(".passwordLabel");
var passwordInput = document.querySelector(".passwordInput");
var confirmPasswordLabel = document.querySelector(".confirmPasswordLabel");
var confirmPasswordInput = document.querySelector(".confirmPasswordInput");
var birthLabel = document.querySelector(".birthLabel");
var birthInput = document.querySelector(".birthInput");
var genderLabel = document.querySelector(".genderLabel");
var femaleInput = document.querySelector(".femaleInput");
var femaleLabel = document.querySelector(".femaleLabel");
var maleInput = document.querySelector(".maleInput");
var maleLabel = document.querySelector(".maleLabel");
function validateForm() {
  resetLabels();
  if (
    fnameInput.value == "" ||
    fnameInput.value[0] != fnameInput.value[0].toUpperCase() ||
    fnameInput.value.length < 3 ||
    fnameInput.value.includes(" ")
  ) {
    fnameLabel.classList.replace("text-primary", "text-danger");
    fnameLabel.innerHTML = "Please Enter Valid UserName";
    return false;
  } else if (
    lnameInput.value == "" ||
    lnameInput.value[0] != lnameInput.value[0].toUpperCase() ||
    lnameInput.value.length < 3 ||
    lnameInput.value.includes(" ")
  ) {
    lnameLabel.classList.replace("text-primary", "text-danger");
    lnameLabel.innerHTML = "Please Enter Valid LastName";
    return false;
  } else if (emailInput.value == "") {
    emailLabel.classList.replace("text-primary", "text-danger");
    emailLabel.innerHTML = "Please Enter Valid Email";
    return false;
  } else if (
    phnNumInput.value == "" ||
    isNaN(phnNumInput.value) ||
    phnNumInput.value.length > 12
  ) {
    phnNumLabel.classList.replace("text-primary", "text-danger");
    phnNumLabel.innerHTML = "Please Enter Valid PhoneNumber";
    return false;
  } else if (passwordInput.value == "" || passwordInput.value.length < 6) {
    passwordLabel.classList.replace("text-primary", "text-danger");
    passwordLabel.innerHTML =
      "Please Enter Valid Password (minimum 6 characters)";
    return false;
  } else if (
    confirmPasswordInput.value == "" ||
    confirmPasswordInput.value != passwordInput.value
  ) {
    confirmPasswordLabel.classList.replace("text-primary", "text-danger");
    confirmPasswordLabel.innerHTML = "Passwords must match!";
    return false;
  } else if (birthInput.value == "") {
    birthLabel.classList.replace("text-primary", "text-danger");
    birthLabel.innerHTML = "Please Enter Valid Birthdate";
    return false;
  } else if (!femaleInput.checked && !maleInput.checked) {
    genderLabel.classList.replace("text-primary", "text-danger");
    genderLabel.innerHTML = "Please Select Gender!";
    return false;
  } else {
    return true;
  }
}
function resetLabels() {
  fnameLabel.classList.replace("text-danger", "text-primary");
  fnameLabel.innerHTML = "First Name :";

  lnameLabel.classList.replace("text-danger", "text-primary");
  lnameLabel.innerHTML = "Last Name :";

  emailLabel.classList.replace("text-danger", "text-primary");
  emailLabel.innerHTML = "Email :";

  phnNumLabel.classList.replace("text-danger", "text-primary");
  phnNumLabel.innerHTML = "Phone Number :";

  passwordLabel.classList.replace("text-danger", "text-primary");
  passwordLabel.innerHTML = "Password : ";

  confirmPasswordLabel.classList.replace("text-danger", "text-primary");
  confirmPasswordLabel.innerHTML = "Confirmed Password :";

  birthLabel.classList.replace("text-danger", "text-primary");
  birthLabel.innerHTML = "Birthdate :";

  genderLabel.classList.replace("text-danger", "text-primary");
  genderLabel.innerHTML = "Gender :";
}
