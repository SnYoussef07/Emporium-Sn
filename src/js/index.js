window.onscroll = function() {
  navbarHid();
};

const navbarHid = () => {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    document.querySelector(".navbar h2").classList.add("d-none");
    document.querySelector(".navbar-brand").classList.remove("d-none");
    document.querySelector(".navbar").classList.add("fixed-top");
  } else {
    document.querySelector(".navbar h2").classList.remove("d-none");
    document.querySelector(".navbar-brand").classList.add("d-none");
    document.querySelector(".navbar").classList.remove("fixed-top");
  }
};
