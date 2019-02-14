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

/*Nav button*/
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
