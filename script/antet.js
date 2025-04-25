const desf = document.querySelector(".desfasurare");
const oriunde = document.querySelector("body");
let exista = false;

desf.addEventListener("click", (event) => {
  event.stopPropagation(); 

  if (!exista) {
    desf.style.backgroundColor = "red";
    desf.querySelector("a").style.color = "wheat";
    exista = true;
    const ani = document.createElement("div");
    ani.classList.add("caseta-ani");
    ani.innerHTML = `
      <a class="an" href="1914.html">1914</a>
      <a class="an" href="1915.html">1915</a>
      <a class="an" href="1916.html">1916</a>
      <a class="an" href="1917.html">1917</a>
      <a class="an" href="1918.html">1918</a>
    `;
    ani.classList.add("fadeIn");
    ani.style.width = `${desf.getBoundingClientRect().width}px`;
    desf.appendChild(ani);
  } else {
    inchideAni();
  }
});

// Function to close the popup
function inchideAni() {
  if (exista) {
    exista = false;
    desf.style.backgroundColor = "wheat";
    desf.querySelector("a").style.color = "black";
    const ani = document.querySelector(".caseta-ani");
    if (ani) {
      ani.style.animationName = "fadeOut";
      ani.style.animationDuration = "0.6s";
      setTimeout(() => {
        ani.remove();
      }, 600);
    }
  }
}

oriunde.addEventListener("click", (event) => {
  if (!desf.contains(event.target)) {
    inchideAni();
  }
});
