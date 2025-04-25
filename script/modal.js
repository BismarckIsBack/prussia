const figuri = document.querySelectorAll("figure");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-imagine");
const modalText = document.querySelector(".modal-text");
const header = document.querySelector("header");
const body = document.querySelector("body");

figuri.forEach((fig) => {
  fig.firstElementChild.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    const captionElement = this.parentElement.querySelector("figcaption");
    if (captionElement) {
      modalText.innerHTML = captionElement.innerHTML;
    }
    header.style.display = "none";
    body.style.overflow = "hidden";
  });
});

const close = document.querySelector(".modal-inchide");

close.addEventListener("click", () => {
    modal.style.display = "none";
    header.style.display = "flex";
    body.style.overflow = "auto";
});
