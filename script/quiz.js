const quizContainer = document.querySelector('.quiz-container');
const intrebari = [
  {
    intrebare: "Între ce ani s-a desfășurat Primul Război Mondial?",
    raspunsuri: {
      a: "1919-1920",
      b: "1939-1945",
      c: "1914-1916",
      d: "1914-1918"
    },
    corect: "d"
  },
  {
    intrebare: "Ce state făceau parte din Tripla Înțelegere înainte de izbucnirea Primului Război Mondial?",
    raspunsuri: {
      a: "Germania, Austro-Ungaria, Italia",
      b: "Marea Britanie, Franța, Rusia",
      c: "Germania, Austro-Ungaria, Rusia",
      d: "Marea Britanie, Franța, Italia"
    },
    corect: "b"
  },
  {
    intrebare: "Cum se numea politica agresivă promovată de noua generație de lideri germani, considerată o cauză a războiului?",
    raspunsuri: {
      a: "Weltpolitik",
      b: "Realpolitik",
      c: "Naționalism",
      d: "Cosmopolitism"
    },
    corect: "a"
  },
  {
    intrebare: "Ce poreclă avea Imperiul Otoman începând cu secolul al XIX-lea?",
    raspunsuri: {
      a: "Omul bolnav al Europei",
      b: "Leul din Est",
      c: "Cobra din Orient",
      d: "Vulturul din Balcani"
    },
    corect: "a"
  },
  {
    intrebare: "Cum se numea organizația secretă care a fost responsabilă pentru asasinarea arhiducelui Franz Ferdinand al Austriei?",
    raspunsuri: {
      a: "Cercetașii din Bosnia",
      b: "Mâna Neagră",
      c: "Liga Națională",
      d: "Uniunea Slavilor"
    },
    corect: "b"
  },
  {
    intrebare: "Ce teritoriu al Imperiului Otoman a anexat Italia din 1912?",
    raspunsuri: {
      a: "Egipt",
      b: "Maroc",
      c: "Libia",
      d: "Abisinia"
    },
    corect: "c"
  },
  {
    intrebare: "Ce denumire fusese dată Peninsulei Balcanice pentru a descrie situația tensionată din zonă?",
    raspunsuri: {
      a: "Inima Europei",
      b: "Colțul pașnic al continentului",
      c: "Butoiul cu pulbere al Europei",
      d: "Poarta către Orient"
    },
    corect: "c"
  },
  {
    intrebare: "În ce oraș a avut loc asasinarea arhiducelui Franz Ferdinand?",
    raspunsuri: {
      a: "Belgrad",
      b: "Zagreb",
      c: "Viena",
      d: "Sarajevo"
    },
    corect: "d"
  },
  {
    intrebare: "Care a fost prima bătălie majoră a Primului Război Mondial de pe Frontul de Vest?",
    raspunsuri: {
      a: "Bătălia de la Verdun",
      b: "Bătălia de la Kolubara",
      c: "Bătălia de la Liège",
      d: "Bătălia de la Isonzo"
    },
    corect: "c"
  },
  {
    intrebare: "Victoria germanilor în bătălia de la Tannenberg (17 august - 2 septembrie 1914) este atribuită iscusinței căror generali?",
    raspunsuri: {
      a: "Paul von Hindenburg și Erich Ludendorff",
      b: "Wilhelm II și Helmuth von Moltke",
      c: "Falkenhayn și von Kluck",
      d: "Erich Ludendorff, Mackensen și Otto Liman von Sanders"
    },
    corect: "a"
  },
  {
    intrebare: "Cine a fost comandantul șef al Forțelor Expediționare Britanice din 1914 până în 1915?",
    raspunsuri: {
      a: "Sir Frederick Doveton Sturdee",
      b: "Sir Douglas Haig",
      c: "Sir John French",
      d: "Winston Churchill"
    },
    corect: "c"
  },
  {
    intrebare: "Bătălia Galiției (1914) a fost o confruntare între care două armate?",
    raspunsuri: {
      a: "Armata Austro-Ungară și Armata Rusă",
      b: "Armata Germană și Armata Franceză",
      c: "Armata Austro-Ungară și Română",
      d: "Armata Germană și Armata Britanică"
    },
    corect: "a"
  },
  {
    intrebare: "Prima bătălie de la Ypres (octombrie - noiembrie 1914) a marcat sfârșitul cărei operațiuni militare?",
    raspunsuri: {
      a: "Cursa de la Marna",
      b: "Încercuirea de la Ypres",
      c: "Cursa către mare",
      d: "Ofensiva de toamnă"
    },
    corect: "c"
  },
  {
    intrebare: "Viceamiralul Maximilian von Spee a fost comandantul Escadrei germane din Asia de Est în timpul cărei bătălii?",
    raspunsuri: {
      a: "Bătălia Iutlandei",
      b: "Bătălia de la Insulele Falkland",
      c: "Bătălia de la Dogger Bank",
      d: "Bătălia de la Heligoland Bight"
    },
    corect: "b"
  },
  {
    intrebare: "În contextul frontului din Balcani, pe data de 15 decembrie 1914 are loc evenimentul:",
    raspunsuri: {
      a: "Sârbii recuceresc Belgradul",
      b: "Austro-Ungaria invadează Serbia",
      c: "Sârbii sunt evacuați în Albania",
      d: "Sârbii capitulează în fața Austro-Ungariei"
    },
    corect: "a"
  },
  {
    intrebare: "Cine a susținut inițiativa de a deschide un nou front la Gallipoli?",
    raspunsuri: {
      a: "Phillipe Pétain",
      b: "Neville Chamberlain",
      c: "Winston Churchill",
      d: "Ferdinand Foch"
    },
    corect: "c"
  },
  {
    intrebare: "Ce tip de gaz a fost utilizat pentru prima dată în război de către germani în a doua bătălie de la Ypres (aprilie 1915)?",
    raspunsuri: {
      a: "Gazul de muștar",
      b: "Clorul",
      c: "Fosgenul"
    },
    corect: "b"
  },
  {
    intrebare: "Victoria decisivă a Puterilor Centrale în bătălia de la Gorlice-Tarnów a avut loc pe teritoriul:",
    raspunsuri: {
      a: "Poloniei",
      b: "României",
      c: "Finlandei",
      d: "Serbiei"
    },
    corect: "a"
  },
  {
    intrebare: "Austro-Ungaria folosea trupe speciale pentru a lupta în relieful montan din Alpi numite:",
    raspunsuri: {
      a: "Vânători de munte",
      b: "Vânători de stâncă",
      c: "Trupe de asalt",
      d: "Vânători tirolezi"
    },
    corect: "d"
  },
  {
    intrebare: "Campania din Serbia din anul 1915 s-a sfârșit cu:",
    raspunsuri: {
      a: "Ocuparea completă a Serbiei",
      b: "Respingerea invaziei Puterilor Centrale și recuperarea teritoriile de către Serbia",
      c: "Intrarea Bulgariei în război de partea Antantei",
      d: "Debarcarea Antantei în Balcani"
    },
    corect: "a"
  },
  {
    intrebare: "Cea mai mare confruntare navală din Primul Război Mondial s-a desfășurat în cadrul cărei bătălii?",
    raspunsuri: {
      a: "Bătălia de la Heligoland Bight",
      b: "Bătălia de la Coronel",
      c: "Raidul german asupra Scarborough, Hartlepool și Whitby",
      d: "Bătălia Iutlandei"
    },
    corect: "d"
  },
  {
    intrebare: "Care a fost scopul principal al Ofensivei Brusilov din anul 1916?",
    raspunsuri: {
      a: "Sa stabilească un coridor rusesc spre Balcani",
      b: "Sa atragă trupe germane de pe Frontul de Vest",
      c: "Să obțină controlul asupra rutelor comerciale din Marea Neagră",
      d: "Să demonstreze superioritatea cavaleriei ruse în teren muntos"
    },
    corect: "b"
  },
  {
    intrebare: "Cum se numea mareșalul care a comandat armata germană în campania din România (1916)?",
    raspunsuri: {
      a: "Paul von Hindenburg",
      b: "Albrecht, Duce de Württemberg",
      c: "Karl von Bülow",
      d: "August von Mackensen"
    },
    corect: "d"
  },
  {
    intrebare: "Ce slogan a fost folosit de francezi în timpul bătăliei de la Verdun (1916)?",
    raspunsuri: {
      a: "„Ils ne passeront pas!” („Nu vor trece!”)",
      b: "„On les aura!” – „Le vom da noi!” / „O să-i prindem!”",
      c: "„Debout les morts!” – „Ridicați-vă, morților!”",
      d: "„La guerre pour la civilisation!” – „Războiul pentru civilizație!”"
    },
    corect: "a"
  },
  {
    intrebare: "Bătălia de pe Somme (1916) a marcat începutul unei noi strategii de război, care a fost:",
    raspunsuri: {
      a: "Utilizarea aviației",
      b: "Utilizarea tancurilor",
      c: "Utilizarea gazului toxic",
      d: "Utilizarea artileriei grele"
    },
    corect: "b"
  },
  {
    intrebare: "Comandantul otoman Halil Kut Pașa a eșuat în apărarea:",
    raspunsuri: {
      a: "Ierusalimului",
      b: "Damascului",
      c: "Bagdadului",
      d: "Alepului"
    },
    corect: "c"
  },
  {
    intrebare: "Porecla „Baronul Roșu” se referă la:",
    raspunsuri: {
      a: "Hermann Göring",
      b: "Werner Voss",
      c: "Billy Bishop",
      d: "Manfred von Richthofen"
    },
    corect: "d"
  },
  {
    intrebare: "Bătălia de la Paaschendale mai este cunoscută și ca:",
    raspunsuri: {
      a: "A treia bătălie de la Ypres",
      b: "A doua bătălie de la Liège",
      c: "A șasea bătălie de la Isonzo",
      d: "A doua bătălie de pe Marna"
    },
    corect: "a"
  },
  {
    intrebare: "În urma înfrângerii italienilor în bătălia de la Caporetto (octombrie 1917), a fost demis din funcția de comandant suprem: ",
    raspunsuri: {
      a: "Armando Diaz",
      b: "Luigi Cadorna",
      c: "Pietro Badoglio",
      d: "Luigi Capello"
    },
    corect: "b"
  },
  {
    intrebare: "Care bătălie a avut cel mai mare număr de tancuri implicate în Primul Război Mondial?",
    raspunsuri: {
      a: "Bătălia de la Soissons",
      b: "Bătălia de la Amiens",
      c: "Bătălia de la Saint-Mihiel",
      d: "Bătălia de la Cambrai"
    },
    corect: "d"
  },
  {
    intrebare: "Varianta de tancuri produsă de germani în Primul Război Mondial se numea:",
    raspunsuri: {
      a: "Panzer I",
      b: "A7V",
      c: "Renault FT",
      d: "Sturmpanzerwagen"
    },
    corect: "b"
  },
  {
    intrebare: "Forțele Expediționare Americane erau comandate de:",
    raspunsuri: {
      a: "John J. Pershing",
      b: "George S. Patton",
      c: "William Sims",
      d: "Frederick Funston"
    },
    corect: "a"
  },
  {
    intrebare: "Comandantul grupului de Armate Yildirim, din anul 1917 până în anul 1918, a fost:",
    raspunsuri: {
      a: "Erich von Falkenhayn",
      b: "Mustafa Kemal",
      c: "Otto Liman von Sanders",
      d: "Paul von Hindenburg"
    },
    corect: "c"
  },
  {
    intrebare: "Italienii și-au luat revanșa în fața austro-ungarilor pentru înfrângerea de la Caporetto în:",
    raspunsuri: {
      a: "Bătălia de la Vittorio Veneto",
      b: "Bătălia de la Piave",
      c: "Bătălia de la Asiago",
      d: "Bătălia de la Monte Grappa"
    },
    corect: "a"
  },
  {
    intrebare: "Rusia a semnat un tratat de pace separat cu Puterile Centrale la:",
    raspunsuri: {
      a: "București",
      b: "Brest-Litovsk",
      c: "Luțk",
      d: "Petrograd"
    },
    corect: "b"
  },
  {
    intrebare: "Din cadrul consiliului „Celor Patru Mari” NU făcea parte:",
    raspunsuri: {
      a: "Georges Clemenceau",
      b: "Winston Churchill",
      c: "Woodrow Wilson",
      d: "Vittorio Orlando"
    },
    corect: "b"
  },
  {
    intrebare: "Conform Tratatului de la Saint-Germain-en-Laye, Austriei nu i-a fost permis:",
    raspunsuri: {
      a: "Să se unească cu Germania",
      b: "Să fie membră al Ligii Națiunilor",
      c: "Să rămână o monarhie",
      d: "Să își păstreze flota militară"
    },
    corect: "a"
  },
  {
    intrebare: "Tratatul de pace al Bulgariei cu Antanta a fost semnat la:",
    raspunsuri: {
      a: "Dijon",
      b: "Nantes",
      c: "Neuilly-sur-Seine",
      d: "Sèvres"
    },
    corect: "c"
  },
  {
    intrebare: "Care a fost una dintre principalele consecințe teritoriale ale Tratatului de la Trianon (1920) pentru Ungaria?",
    raspunsuri: {
      a: "A pierdut accesul la Marea Adriatică",
      b: "A pierdut teritorii în favoarea României, Cehoslovaciei și Iugoslaviei",
      c: "A anexat teritorii din Ucraina",
      d: "A obținut controlul asupra Slovaciei"
    },
    corect: "b"
  },
  {
    intrebare: "Ce regiune a fost cedată Greciei prin Tratatul de la Sèvres, declanșând tensiuni cu naționaliștii turci?",
    raspunsuri: {
      a: "Anatolia Centrală",
      b: "Cipru",
      c: "Insula Rodos",
      d: "Tracia de Est și zona Smirna (Izmir)"
    },
    corect: "d"
  },
];

let index = parseInt(localStorage.getItem('quizIndex')) || 0;
let scor = parseInt(localStorage.getItem('quizScor')) || 0;
let quizStadiu = localStorage.getItem('quizStadiu') || 'start';

function salveazaStare() {
  localStorage.setItem('quizIndex', index);
  localStorage.setItem('quizScor', scor);
  localStorage.setItem('quizStadiu', quizStadiu);
}

// Resetează starea
function reseteazaStare() {
  index = 0;
  scor = 0;
  quizStadiu = 'start';
  localStorage.clear();
}

// La încărcarea paginii
window.addEventListener('DOMContentLoaded', () => {
  if (quizStadiu === 'in-test') {
    afiseazaIntrebare(index);
  } else if (quizStadiu === 'completat') {
    afiseazaFinal();
  } else {
    afiseazaStart();
  }
});

function afiseazaStart() {
  quizContainer.innerHTML = `
    <h1 class="titlu-quiz">Quiz - Primul Război Mondial</h1>
    <p class="descriere">Testează-ți cunoștințele despre Marele Război!</p>
    <button class="start">Începe testul!</button>
  `;
  
  document.querySelector('.start').addEventListener('click', () => {
    quizStadiu = 'in-test';
    salveazaStare();
    afiseazaIntrebare(index);
  });
}

function afiseazaIntrebare(i) {
  const intrebare = intrebari[i];
  let butoaneHTML = '';
  
  for (const litera in intrebare.raspunsuri) {
    butoaneHTML += `<button class="raspuns" data-raspuns="${litera}">${intrebare.raspunsuri[litera]}</button>`;
  }

  quizContainer.innerHTML = `
    <div class="contor-intrebare">Întrebarea ${i + 1}/${intrebari.length}</div>
    <div class="intrebare">${intrebare.intrebare}</div>
    <div class="raspunsuri">${butoaneHTML}</div>
  `;

  document.querySelectorAll('.raspuns').forEach(button => {
    button.addEventListener('click', (e) => {
      const raspunsSelectat = e.target.getAttribute('data-raspuns');
      let esteCorect = null;
      if (raspunsSelectat === intrebare.corect) {
        esteCorect = true;
      }
      else {
        esteCorect = false;
      }
      
      if (esteCorect) {
        scor++;
        salveazaStare();
      }
      
      document.querySelectorAll('.raspuns').forEach(btn => {
        if (btn.getAttribute('data-raspuns') === intrebare.corect) {
          btn.classList.add('corect');
        } else if (btn.getAttribute('data-raspuns') === raspunsSelectat && !esteCorect) {
          btn.classList.add('gresit');
        }
        btn.disabled = true;
      });
      
      const btnContinuare = document.createElement('button');
      btnContinuare.className = 'continuare';
      btnContinuare.textContent = index < intrebari.length - 1 ? 'Următoarea întrebare' : 'Vezi rezultatul';
      btnContinuare.addEventListener('click', () => {
        index++;
        if (index < intrebari.length) {
          salveazaStare();
          afiseazaIntrebare(index);
        } else {
          quizStadiu = 'completat';
          salveazaStare();
          afiseazaFinal();
        }
      });
      quizContainer.appendChild(btnContinuare);
    });
  });
}

function afiseazaFinal() {
  let mesaj = '';
  const procentaj = Math.round((scor / intrebari.length) * 100);
  
  if (procentaj >= 90) {
    mesaj = "Perfect! Ești un expert în Primul Război Mondial!";
  } else if (procentaj >= 70) {
    mesaj = "Bun rezultat! Ai cunoștințe solide despre acest conflict.";
  } else if (procentaj >= 50) {
    mesaj = "Nu e rău! Mai citește puțin și vei fi pregătit.";
  } else {
    mesaj = "Mai studiază subiectul și încearcă din nou!";
  }

  quizContainer.innerHTML = `
    <h2>Test finalizat!</h2>
    <div class="rezultat-final">
      <p>Ai răspuns corect la <strong>${scor} din ${intrebari.length}</strong> întrebări.</p>
      <p>${mesaj}</p>
    </div>
    <button class="restart">Reia testul</button>
  `;
  
  document.querySelector('.restart').addEventListener('click', () => {
    reseteazaStare();
    afiseazaStart();
  });
}