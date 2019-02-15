/* Scroll navBar */
window.onscroll = function() {
  navbarHid();
};

const navbarHid = () => {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.querySelector(".navbar-brand").classList.remove("d-none");
    document.querySelector(".navbar").classList.add("fixed-top");
  } else {
    document.querySelector(".navbar-brand").classList.add("d-none");
    document.querySelector(".navbar").classList.remove("fixed-top");
  }
};

/*SWitch Color*/
const btnWhite = document.getElementById("btnWhite");
const btnDark = document.getElementById("btnDark");

btnWhite.addEventListener("click", () => {
  const allSwitch = document.querySelectorAll(".switchColor");
  for (const elt of allSwitch) {
    elt.classList.add("bg-white");
    elt.classList.remove("bg-dark");
    elt.classList.remove("text-white");
    //
    elt.classList.add("navbar-light");
    elt.classList.remove("navbar-dark");
  }
});

btnDark.addEventListener("click", () => {
  const allSwitch = document.querySelectorAll(".switchColor");
  for (const elt of allSwitch) {
    elt.classList.remove("bg-white");
    elt.classList.add("bg-dark");
    elt.classList.add("text-white");
    //
    elt.classList.remove("navbar-light");
    elt.classList.add("navbar-dark");
  }
});

/* Modal */

/*Open Modal */

const btnModal = document.getElementById("btnModal");
const myModal = document.getElementById("myModal");
const btnClose = document.querySelector(".close");

btnModal.addEventListener("click", () => {
  myModal.classList.toggle("d-none");
});

btnClose.addEventListener("click", () => {
  myModal.classList.toggle("d-none");
});

/*Connexion et Inscription */
const connexion = document.getElementById("login");
const inscription = document.getElementById("signUp");
const modalConnexion = document.querySelector(".connexion");
const modalInscription = document.querySelector(".inscription");

connexion.addEventListener("click", () => {
  modalConnexion.classList.remove("d-none");
  modalInscription.classList.add("d-none");
});

inscription.addEventListener("click", () => {
  modalConnexion.classList.add("d-none");
  modalInscription.classList.remove("d-none");
  console.log("Hello");
});
