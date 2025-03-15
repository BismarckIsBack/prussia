let slideIndex = 0;
let slideTimeout;

afiseaza(slideIndex);

function startAfisareAutomata() {
  slideTimeout = setTimeout(afiseazaAutomat, 3000);
}


function plusSlide(n) {
  clearTimeout(slideTimeout);
  afiseaza(slideIndex += n);
  startAfisareAutomata();
}

function crtSlide(n) {
  clearTimeout(slideTimeout);
  afiseaza(slideIndex = n);
  startAfisareAutomata();
}

function afiseaza(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
} 

afiseazaAutomat();
function afiseazaAutomat() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideTimeout = setTimeout(afiseazaAutomat, 3000);
}