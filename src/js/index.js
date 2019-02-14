window.onscroll = function() {
  navbarHid();
};

const navbarHid = () => {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    //document.querySelector(".navbar h2").classList.add("d-none"); // titre
    document.querySelector(".navbar-brand").classList.remove("d-none");
    document.querySelector(".navbar").classList.add("fixed-top");
  } else {
    //document.querySelector(".navbar h2").classList.remove("d-none"); //titre
    document.querySelector(".navbar-brand").classList.add("d-none");
    document.querySelector(".navbar").classList.remove("fixed-top");
  }
};
