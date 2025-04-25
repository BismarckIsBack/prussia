function seteazaH() {
  const main = document.querySelector('main');
  const stanga = document.querySelector('.stanga');
  const dreapta = document.querySelector('.dreapta');
  const mainHeight = main.scrollHeight;
  
  stanga.style.height = mainHeight + 'px';
  dreapta.style.height = mainHeight + 'px';
}

window.addEventListener('DOMContentLoaded', seteazaH);
window.addEventListener('resize', seteazaH);
window.addEventListener('load', seteazaH);

const titluri = document.querySelectorAll('.titlu-capitol[id]');
const cuprins = document.querySelector('.lista-cuprins');

titluri.forEach(titlu => {
  if (titlu) {
    const bold = document.createElement('li');
    bold.classList.add('element-cuprins');
    bold.innerHTML = `<a class="link-cuprins" href="#${titlu.id}">${titlu.innerHTML}</a>`;
    cuprins.appendChild(bold);
  }
});