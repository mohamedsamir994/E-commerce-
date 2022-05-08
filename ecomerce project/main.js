var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//  filter code
const btns = document.querySelectorAll(".btn1");
const storeProducts = document.querySelectorAll(".store-product");
// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    console.log(filter);

    storeProducts.forEach((product) => {
      if (filter === "all") {
        product.style.display = "block";
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
}

// console.log(btns);
let index = 0;
for (; index < btns.length; index++) {
  btns[index].addEventListener("click", function (e) {
    console.log(btns.length);
    btns[index].classList.add("active1");
    // btns[0].classList.remove("active1");
  });
}

// **************************************************
let add = document.querySelectorAll(".btn-secondary");
let spam = document.querySelector(".total-count");

let s = 0;
for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click", function () {
    s += 1;
    spam.innerHTML = s;
    // spam.append(s);
  });
}

//  reset butt
let reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
  s = 0;
  spam.innerHTML = "";
});
// ***********************************************

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
