"use strict";
let input1 = document.getElementById("text");
let input2 = document.querySelector("#email");
let input3 = document.querySelector("#password");
let spant = document.querySelector(".spantxt");
let spanE = document.querySelector(".spanemail");
let spanPass = document.querySelector(".spanpass");
let sub = document.querySelector("#submit");
let cont = document.querySelector("#country");
let contspan = document.querySelector("#contspan");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

input1.addEventListener("keyup", function (e) {
  if (e.target.value.length <= 2) {
    input1.style.border = "2px solid red";
    spant.style.display = "block";
  } else {
    input1.style.border = "1px solid #ccc";
    spant.style.display = "none";
  }
  if (e.target.value.length == "") {
    input1.style.border = "1px solid #ccc";
    spant.style.display = "none";
  }
});

input2.addEventListener("keyup", function () {
  if (input2.value.match(pattern)) {
    input2.style.border = "1px solid #ccc";
    spanE.style.display = "none";
  } else {
    input2.style.border = "2px solid red";
    spanE.style.display = "block";
  }
  if (input2.value == "") {
    input2.style.border = "1px solid #ccc";
    spanE.style.display = "none";
  }
});

input3.addEventListener("keyup", function (e) {
  if (e.target.value.length <= 8) {
    input3.style.border = "2px solid red";
    spanPass.style.display = "block";
  } else {
    input3.style.border = "1px solid #ccc";
    spanPass.style.display = "none";
  }
  if (input3.value === "") {
    input3.style.border = "1px solid #ccc";
    spanPass.style.display = "none";
  }
});

sub.addEventListener("click", function (e) {
  // let mess = [];
  if (input1.value.length <= 2 || input1.value == null) {
    e.preventDefault();
    input1.style.border = "2px solid red";
    spant.style.display = "block";
  }

  if (input2.value.match(pattern) === false || input2.value == "") {
    e.preventDefault();
    input2.style.border = "2px solid red";
    spanE.style.display = "block";
  }

  if (input3.value.length <= 8 || input3.value == "") {
    e.preventDefault();
    input3.style.border = "2px solid red";
    spanPass.style.display = "block";
  }

  if (cont.options[0].selected === true) {
    contspan.style.display = "block";
  } else {
    contspan.style.display = "none";
  }
  let valed = false;
  if (document.querySelector("#male").checked) {
    valed = true;
  } else if (document.querySelector("#female").checked) {
    valed = true;
  }
  if (!valed) {
    document.querySelector("#gender").style.display = "block";
  } else {
    document.querySelector("#gender").style.display = "none";
  }
  let sum = 0;
  let name = document.getElementsByName("ok");
  for (let i = 0; i < name.length; i++) {
    if (name[i].checked == true) {
      sum = sum + 1;
    }
    if (sum < 2) {
      document.querySelector("#sportspan").style.display = "block";
    } else {
      document.querySelector("#sportspan").style.display = "none";
    }
  }
});

function resett() {
  contspan.style.display = "none";
  spanPass.style.display = "none";
  spanE.style.display = "none";
  spant.style.display = "none";
  input3.style.border = "1px solid #ccc";
  input2.style.border = "1px solid #ccc";
  input1.style.border = "1px solid #ccc";
  document.querySelector("#sportspan").style.display = "none";
  document.querySelector("#gender").style.display = "none";
}
