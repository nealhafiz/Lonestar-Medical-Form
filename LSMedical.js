/*
Program name: Lonestar Medical Patient Form (Javascript)
Author: Neal Hafiz
Date created: 3/3/2025
Date last edited: 3/05/2025
Version: 2.7
Description: Script Element for the Patient Registation Form.
*/

//NOTE FOR EXAM: JS in head on html sheet is considered meta data. 

//Professor Messinger's Code for showing Today's date
const d = new Date();
 let text = d.toLocaleDateString();
 document.getElementById("today").innerHTML = text;
//formats date
 const dateformat = d.toISOString().split('T')[0];
 //Sets the max date to today's current date
 document.getElementById('date').setAttribute('max', dateformat);

//Form Redisplay

 //No future date (Date Range check) (optional)
 function Nofuturedate(){
    document.getElementById("Date");
 }

//Dynamic Range slider Used slider from https://www.w3schools.com/howto/howto_js_rangeslider.asp
 var slider = document.getElementById("Range");
 var output = document.getElementById("slider");
 output.innerHTML = slider.value;

 slider.oninput = function() {
 output.innerHTML = this.value;
 }

 //Password Validation; source from WS3schools 
 var passone = document.getElementById("password");
 var passver = document.getElementById("passcheck");
 var letter = document.getElementById("letter");
 var capital = document.getElementById("capital");
 var number = document.getElementById("number");
 var length = document.getElementById("length");

 passone.onfocus = function() {
   document.getElementById("message").style.display = "block";
 }

 passone.onblur = function() {
   document.getElementById("message").style.display = "none";
 }

 // When the user starts to type something inside the password field https://www.w3schools.com/howto/howto_js_password_validation.asp
passone.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(passone.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(passone.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(passone.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(passone.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

passver.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

passver.onblur = function() {
  document.getElementById("message").style.display = "none";
}

passver.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(passver.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(passver.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(passver.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(passver.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

 //Function for password match https://www.geeksforgeeks.org/password-matching-using-javascript/?ref=ml_lbp# source
 function PasswordCheck(){
 var password = document.getElementById("password").value;
 var passcheck = document.getElementById("passcheck").value;

  if (password == "") //if the password field contains nothing, A message will appear to type in your password. 
    alert("Please Enter Password");

  else if (passcheck =="") //if the Re-password field contains nothing, A message will appear to type in your password.
    alert("Please Re-Enter your Password");

  else if (password != passcheck){ //if the passwords do not match, A messaage will alert it that they do not match. 
    alert("Passwords do not match. Please enter again.")
    return false;
  }

  else{
    return true;
  }

  }
 
 function reviewdata() {
  var formcontents = document.getElementById("medicalform");
  var formoutput = "Form Data:\n----------------\n";  
  var datatype;
  var i;

  // Loops through all form elements 
  for (i = 0; i < formcontents.length; i++) {
      datatype = formcontents.elements[i].type;
      var name = formcontents.elements[i].name;
      var value = formcontents.elements[i].value;

      // Checkboxes
      if (datatype === "checkbox") {
          if (formcontents.elements[i].checked) {
              formoutput += name + " (Checkbox): Checked\n";
          } else {
              formoutput += name + " (Checkbox): Not Checked\n";
          }
      }
      // Radio Buttons
      else if (datatype === "radio") {
          if (formcontents.elements[i].checked) {
              formoutput += name + " (Radio): " + formcontents.elements[i].value + "\n";
          }
      }
      // Inputs
      else if (datatype !== "button" && datatype !== "submit" && datatype !== "reset") {
          formoutput += name + " (" + datatype + "): " + value + "\n";
      }
  }

  // Alert output will be called once completed
  alert(formoutput);
}
