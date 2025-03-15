const svg = document.getElementById('wrapper');
let isPanning = false;
let startPoint = { x: 0, y: 0 };
let scale = 1;

// Încadrare hartă într-un chenar de dimensiuni minime
const minViewBox = {
  x : 0,
  y: 0,
  width: svg.getAttribute('width'),
  height: svg.getAttribute('height')
}

// Definire limite de zoom
const minZoom = minViewBox.width * 0.1 * 1.5;
const maxZoom = minViewBox.width / 1.5;

// Panning
svg.addEventListener('mousedown', (e) => {
  if (e.button === 0) { // Se ia în considerare doar click-stânga
    isPanning = true;
    startPoint = { x: e.clientX, y: e.clientY };
  }
});

svg.addEventListener('mousemove', (e) => {
  if (isPanning) {
    const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
    scale = svg.getBoundingClientRect().width / viewBox[2];
    const dx = (e.clientX - startPoint.x) / scale;
    const dy = (e.clientY - startPoint.y) / scale;

    // Aplicare limite de panning
    viewBox[0] = Math.max(minViewBox.x, Math.min(viewBox[0] - dx, minViewBox.x + minViewBox.width / 1.5 - viewBox[2]));
    viewBox[1] = Math.max(minViewBox.y, Math.min(viewBox[1] - dy, minViewBox.y + minViewBox.height / 1.5 - viewBox[3]));
    svg.setAttribute('viewBox', viewBox.join(' '));
    startPoint = { x: e.clientX, y: e.clientY };
  }
});

svg.addEventListener('mouseup', () => {
  isPanning = false;
});

svg.addEventListener('mouseleave', () => {
  isPanning = false;
});

// Zoom
svg.addEventListener('wheel', (e) => {
  e.preventDefault(); // Previne scroll-ul paginii

  const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
  const rect = svg.getBoundingClientRect();
  const mouseX = (e.clientX - rect.left) / rect.width;
  const mouseY = (e.clientY - rect.top) / rect.height;

  // Calculează dimensiunea nouă a viewBox-ului pe baza zoom-ului
  let newWidth = viewBox[2] * (1 + Math.sign(e.deltaY) * 0.15);
  let newHeight = viewBox[3] * (1 + Math.sign(e.deltaY) * 0.15);

  // Aplicare limite de zoom
  if (newWidth < minZoom) {
    newWidth = minZoom;
    newHeight = (minZoom / viewBox[2]) * viewBox[3]; // Menține proporția
  } 
  if (newWidth > maxZoom) {
    newWidth = maxZoom;
    newHeight = (maxZoom / viewBox[2]) * viewBox[3]; // Menține proporția
  }

  // Ajustează poziția pentru a face zoom pe cursor
  const dw = viewBox[2] - newWidth;
  const dh = viewBox[3] - newHeight;
  viewBox[0] = viewBox[0] + dw * mouseX;
  viewBox[1] = viewBox[1] + dh * mouseY;
  viewBox[2] = newWidth;
  viewBox[3] = newHeight;

  viewBox[0] = Math.max(minViewBox.x, Math.min(viewBox[0], minViewBox.x + minViewBox.width / 1.5 - viewBox[2]));
  viewBox[1] = Math.max(minViewBox.y, Math.min(viewBox[1], minViewBox.y + minViewBox.height / 1.5 - viewBox[3]));

  svg.setAttribute('viewBox', viewBox.join(' '));
});

const countries = document.querySelectorAll('.tara');
let drag = false;
let deltaX = 0;
let deltaY = 0;
let crtBox = null;

countries.forEach(path => {
  const countryClass = path.classList[1];
  const territory = document.querySelectorAll(`.tara.${countryClass}`);
  path.addEventListener('mouseenter', () => {
    territory.forEach(p => p.classList.add('hover'));
  });
  path.addEventListener('mouseleave', () => {
    territory.forEach(p => p.classList.remove('hover'));
  });
});

const info = {
  FR: {
    denumire: 'Franța',
    steag: 'imagini/steaguri/franta.png',
    alianta: 'Antanta',
    populatie: '88 de milioane',
    victime: '~1,40 de milioane',
    particip: '1914-1918'
  }, 
  GER: {
  denumire: "Imperiul German",
  steag: 'imagini/steaguri/germania.png',
  alianta: "Puterile Centrale",
  populatie: '75 de milioane',
  victime: "2,80 milioane",
  particip: "1914-1918"
  },
  UK: {
    denumire: 'Imperiul Britanic',
    steag: 'imagini/steaguri/uk.png',
    alianta: 'Antanta',
    populatie: '380 de milioane',
    victime: '~1,24 de milioane',
    particip: '1914-1918'
  }, 
  ROM: {
    denumire: 'Regatul României',
    steag: 'imagini/steaguri/romania.png',
    alianta: 'Antanta',
    populatie: '7,77 de milioane',
    victime: '~665.000',
    particip: '1916-1918'
  },
  US: {
    denumire: 'Statele Unite ale Americii',
    steag: 'imagini/steaguri/usa.png',
    alianta: 'Antanta',
    populatie: '92 de milioane',
    victime: '~117.000',
    particip: '1917-1918'
  },
  TUR: {
    denumire: 'Imperiul Otoman',
    steag: 'imagini/steaguri/otoman.png',
    alianta: 'Puterile Centrale',
    populatie: '21,3 milioane',
    victime: '~3,20 de milioane',
    particip: '1914-1918'
  },
  ITA: {
    denumire: 'Regatul Italiei',
    steag: 'imagini/steaguri/italia.png',
    alianta: 'Antanta',
    populatie: '38 de milioane',
    victime: '~1,30 de milioane',
    particip: '1915-1918'
  },
  ES: {
    denumire: 'Regatul Spaniei',
    steag: 'imagini/steaguri/spania.png',
    alianta: 'Țară neutră',
    populatie: '20,3 milioane',
    victime: '0',
    particip: ''
  },
  PT: {
    denumire: 'Portugalia',
    steag: 'imagini/steaguri/portugalia.png',
    alianta: 'Antanta',
    populatie: '14,7 milioane',
    victime: '~7.500',
    particip: '1916-1918'
  },
  RUS: {
    denumire: 'Imperiul Rus',
    steag: 'imagini/steaguri/rusia.png',
    alianta: 'Antanta',
    populatie: '164 de milioane',
    victime: '~2,70 milioane',
    particip: '1914-1918'
  },
  AU: {
    denumire: 'Imperiul Austro-Ungar',
    steag: 'imagini/steaguri/austria.png',
    alianta: 'Puterile Centrale',
    populatie: '52,6 milioane',
    victime: '~1,86 milioane',
    particip: '1914-1918'
  },
  GR: {
    denumire: 'Regatul Greciei',
    steag: 'imagini/steaguri/grecia.png',
    alianta: 'Antanta',
    populatie: '4,9 milioane',
    victime: '~25.000',
    particip: '1917-1918'
  },
  JPN: {
    denumire: 'Imperiul Japonez',
    steag: 'imagini/steaguri/japonia.png',
    alianta: 'Antanta',
    populatie: '53 de milioane',
    victime: '~1.000',
    particip: '1914-1918'
  },
  SRB: {
    denumire: 'Serbia',
    steag: 'imagini/steaguri/serbia.png',
    alianta: 'Antanta',
    populatie: '3,1 milioane',
    victime: '~525.000',
    particip: '1914-1918'
  },
  BE: {
    denumire: 'Belgia',
    steag: 'imagini/steaguri/belgia.png',
    alianta: 'Antanta',
    populatie: '20 de milioane',
    victime: '~88.000',
    particip: '1914-1918'
  },
  MUN: {
    denumire: 'Muntenegru',
    steag: 'imagini/steaguri/muntenegru.png',
    alianta: 'Antanta',
    populatie: '200.000',
    victime: '~13.000',
    particip: '1914-1916'
  },
  BG: {
    denumire: 'Bulgaria',
    steag: 'imagini/steaguri/bulgaria.png',
    alianta: 'Puterile Centrale',
    populatie: '4,7 milioane',
    victime: '~388.000',
    particip: '1914-1916'
  },
  CH: {
    denumire: 'Elveția',
    steag: 'imagini/steaguri/elvetia.png',
    alianta: 'Țară neutră',
    populatie: '3,7 milioane',
    victime: '0',
    particip: ''
  },
  ALB: {
    denumire: 'Albania',
    steag: 'imagini/steaguri/albania.png',
    alianta: 'Țară neutră',
    populatie: '~800.000',
    victime: '0',
    particip: ''
  },
  DEN: {
    denumire: 'Danemarca',
    steag: 'imagini/steaguri/danemarca.png',
    alianta: 'Țară neutră',
    populatie: '2,8 milioane',
    victime: '2.000',
    particip: ''
  },
  NL: {
    denumire: 'Olanda',
    steag: 'imagini/steaguri/olanda.png',
    alianta: 'Țară neutră',
    populatie: '47,5 milioane',
    victime: '0',
    particip: ''
  },
  MEX: {
    denumire: 'Mexic',
    steag: 'imagini/steaguri/mexic.png',
    alianta: 'Țară neutră',
    populatie: '15 milioane',
    victime: '0',
    particip: ''
  },
  SWE: {
    denumire: 'Suedia',
    steag: 'imagini/steaguri/suedia.png',
    alianta: 'Țară neutră',
    populatie: '5,5 milioane',
    victime: '0',
    particip: ''
  },
  NOR: {
    denumire: 'Norvegia',
    steag: 'imagini/steaguri/norvegia.png',
    alianta: 'Țară neutră',
    populatie: '2,5 milioane',
    victime: '0',
    particip: ''
  },
  ETI: {
    denumire: 'Etiopia',
    steag: 'imagini/steaguri/etiopia.png',
    alianta: 'Țară neutră',
    populatie: '12 milioane',
    victime: '0',
    particip: ''
  },
  TBI: {
    denumire: 'Tibet',
    steag: 'imagini/steaguri/tibet.png',
    alianta: 'Țară neutră',
    populatie: '~1 milion',
    victime: '0',
    particip: ''
  },
  BHU: {
    denumire: 'Bhutan',
    steag: 'imagini/steaguri/bhutan.png',
    alianta: 'Țară neutră',
    populatie: '400.000',
    victime: '0',
    particip: ''
  },
  PER: {
    denumire: 'Persia',
    steag: 'imagini/steaguri/persia.png',
    alianta: 'Țară neutră',
    populatie: '8 milioane',
    victime: '785',
    particip: ''
  },
  AFG: {
    denumire: 'Afganistan',
    steag: 'imagini/steaguri/afgan.png',
    alianta: 'Țară neutră',
    populatie: '6 milioane',
    victime: '0',
    particip: ''
  },
  ARB: {
    denumire: 'Emiratul de Nejd și Hasa',
    steag: 'imagini/steaguri/nejd.png',
    alianta: 'Țară neutră',
    populatie: '~3 milioane',
    victime: 'nedocumentat',
    particip: ''
  },
  DO: {
    denumire: 'Republica Dominicană',
    steag: 'imagini/steaguri/dominica.png',
    alianta: 'Țară neutră',
    populatie: '~800.000',
    victime: '0',
    particip: ''
  },
  COL: {
    denumire: 'Columbia',
    steag: 'imagini/steaguri/columbia.png',
    alianta: 'Țară neutră',
    populatie: '5,74 milioane',
    victime: '0',
    particip: ''
  },
  VEZ: {
    denumire: 'Venezuela',
    steag: 'imagini/steaguri/venezuela.png',
    alianta: 'Țară neutră',
    populatie: '3 milioane',
    victime: '0',
    particip: ''
  },
  NPL: {
    denumire: 'Nepal',
    steag: 'imagini/steaguri/nepal.png',
    alianta: 'Antanta',
    populatie: '6 milioane',
    victime: '~21.000',
    particip: '1914-1918'
  }
};

countries.forEach(path => {
    path.addEventListener("click", () => {
      const existingBox = document.querySelector(".caseta");
      if(existingBox) {  //Verificare existenta caseta
        existingBox.remove(); 
      }

      const countryId = path.classList[1];
      console.log(info[countryId].denumire);
      const infoBox = document.createElement("div");
      infoBox.classList.add("caseta");
      if(info[countryId].alianta === "Țară neutră") {
        infoBox.innerHTML = `
        <div class="container-iesire"><button class="iesire">&times</button></div>
        <div class="antet-caseta"><h3>${info[countryId].denumire}</h3>
        <img class="steag" src="${info[countryId].steag}"></div>
        <hr>
        <div class="container-info">
        <p>Țară neutră</p>
        <p>Populație (1914): ${info[countryId].populatie}</p>
        <p>Victime: ${info[countryId].victime}</p></div>
        `;
      } else {
      infoBox.innerHTML = `
        <div class="container-iesire"><button class="iesire">&times</button></div>
        <div class="antet-caseta"><h3>${info[countryId].denumire}</h3>
        <img class="steag" src="${info[countryId].steag}"></div>
        <hr>
        <div class="container-info">
        <p>Alianța: ${info[countryId].alianta}</p>
        <p>Populație (1914): ${info[countryId].populatie}</p>
        <p>Victime: ${info[countryId].victime}</p>
        <p>Participare: ${info[countryId].particip}</p></div>
        `;
      }
      document.body.appendChild(infoBox);

      const rect = path.getBoundingClientRect();
      const boxWidth = infoBox.offsetWidth;
      const boxHeight = infoBox.offsetHeight;
    
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
    
      // Set initial position
      let left = rect.x + window.scrollX;
      let top = rect.y + window.scrollY;
    
      // Prevent spawning out of bounds
      if (left + boxWidth > viewportWidth) {
        left = viewportWidth - boxWidth - 100; // 10px padding
      }
      if (top + boxHeight > viewportHeight) {
        top = viewportHeight - boxHeight - 100
      }
      if (left < 0) left = 500;
      if (top < 0) top = 500;
    
      infoBox.style.left = `${left}px`;
      infoBox.style.top = `${top}px`;
      infoBox.style.display = "block";
        
      crtBox = infoBox;
      Draggable(crtBox);
      const exit = infoBox.querySelector(".iesire");
      exit.addEventListener("click", () => {
        infoBox.remove();
      });   

    })
})

function Draggable(element) {
  element.addEventListener("mousedown", function (e) {
    drag = true;
    deltaX = e.clientX - element.getBoundingClientRect().left;
    deltaY = e.clientY - element.getBoundingClientRect().top;
    element.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", function (e) {
    if (drag && crtBox) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      console.log(viewportWidth, viewportHeight);

      const boxWidth = crtBox.offsetWidth;
      const boxHeight = crtBox.offsetHeight;

      console.log(boxWidth, boxHeight);

      // Calculează noua poziție
      let x = e.clientX - deltaX;
      let y = e.clientY - deltaY;

      // Setează limite
      const minX = 0;
      const minY = 0;
      const maxX = viewportWidth - boxWidth;
      const maxY = viewportHeight - boxHeight;

      // Aplică limite
      x = Math.max(minX, Math.min(x, maxX));
      y = Math.max(minY, Math.min(y, maxY));

      crtBox.style.left = `${x}px`;
      crtBox.style.top = `${y}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    drag = false;
    if (crtBox) {
      crtBox.style.cursor = "grab";
    }
  }
)};

const puterileCentrale = document.querySelector(".centrale");
let activPuterileCentrale = false;
const antanta = document.querySelector(".antanta");
let activAntanta = false;
puterileCentrale.addEventListener("click", () => {
  countries.forEach(path => {
    const countryAlliance = path.classList[2];
    if (activPuterileCentrale) {
      if (countryAlliance === "pc") {
        path.style.fill = "rgb(189, 187, 187)";
      }
    }
    else if (countryAlliance === "pc") {
      path.style.fill = "red";
    }
  })
  activPuterileCentrale = !activPuterileCentrale;
})

antanta.addEventListener("click", () => {
  countries.forEach(path => {
    const countryAlliance = path.classList[2];
    if (activAntanta) {
      if (countryAlliance === "at") {
        path.style.fill = "rgb(189, 187, 187)";
      }
    }
    else if (countryAlliance === "at") {
      path.style.fill = "blue";
    }
  })
  activAntanta = !activAntanta;
})
