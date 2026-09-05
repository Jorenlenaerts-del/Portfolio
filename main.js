const projects = [
  {
    title: 'NOVA_V0',
    cat: 'Automotive · CAD · Keyshot',
    img: "./Public/Foto's/Post Headlights.jpg",
    details: ["./Public/Foto's/HeadlightsRender1.webp", "./Public/Foto's/HeadlightsRender2.webp", "./Public/Foto's/HeadlightsRender3.webp"],
    desc: 'Concept automotive render geïnspireerd op Audi en Mercedes-Benz vormentaal. Op basis van een eerder bachelorproject Echo heb ik head en tail lights toegevoegd aan mijn CAD-model. Lichten geven autos een bepaalde uitstraling, ook de herkenbaarheid van een merk gaat er mee gepaard, hierdoor is dit een essentieel element binnen een ontwerp.',
    extra: 'Dankzij de bepaalde hoeveelheid detail in de lichten kwamen de renders er sterk uit. Hiervoor heb ik Keyshot gebruikt en gewerkt met focus en blurr voor een artistiek.',
    tags: ['Automotive', 'CATIA', 'Render', 'Concept'],
    bg: '#10101a',
    
  },
  {
    title: 'LMP_V0',
    cat: 'Automotive · CAD · CFD optimization',
    img: "./Public/Foto's/Lmp_V0.jpg",
    details: ['./Public/Foto\'s/Render_5_Lmp.webp', './Public/Foto\'s/Render_7_Lmp.webp', './Public/Foto\'s/Render_9_Lmp.webp'],
    desc: 'In mijn vrije tijd ben ik veel bezig met het maken van concept ontwerpen. Dit project is representatief van wat ik op vijf uur kan tekenen binnen Imagine and shape. Het hele modeleerproces is opgenomen via Youtube zodat mensen binnen HydroTeam hier de nodige info uit kunnen halen. Het idee: Een Lmp concept wagen waar gebaseerd op een 3D model met eigen inbreng. Imagine and shape gebruik ik graag om concepten en complexe geometrieën snel te visualiseren. Wat in tradisionele CAD dagen duurt teken je hier op minder dan 10 minuten.',
    tags: ['CATIA I&S', 'NURBS', 'Hydroteam'],
    bg: '#120a0a',
  },
  {
    title: 'A story: HydroTeam',
    cat: 'CAD · CFD optimization · Production',
    img: "./Public/Foto's/Ligier.jpg",
    tags: ['CATIA', 'Hydroteam', 'Le Mans'],
    bg: '#120e06',
    chapters: [
      {
        label: 'Design en productie— Jaar 1',
        desc: 'In het eerste jaar bij HydroTeam hebben we in designgroepen gewerkt. Hier hebben we onderzoek gedaan naar de verschillende panelen op racewagens. Uiteindelijk hebben we een concept gemaakt van de engine cover van een ligier. Later in de zomer zijn hier nog iteraties van gemaakt. Hieronder vind je een aantal renders van het toenmalige concept getekend in CATIA. ',
        details: ["./Public/Foto's/Ligier_BodyPart_EngineCover_V0old_1.webp", "./Public/Foto's/Ligier_BodyPart_EngineCover_V0old_2.webp", "./Public/Foto's/Ligier_BodyPart_EngineCover_V0old_3.webp"], 
      },
      {
        label: 'Design en productie — Jaar 2',
        desc: 'Tijdens het jaar zijn er veel factoren die het ontwerpprocces beinvloeden. Tijdens het jaar zijn er verschillende elementen veranderd. Zo heb ik in het begin van het jaar voor CAD tutorials gezorgd. Dit helpt het team te begrijpen hoe ze complexe ideen kunnen maken aan de hand van Imagine and shape in CATIA. In het tweede semester zijn we begonnen met iteraties op het voorgaande model. Hier is zowel een CFD als productie file van opgemaakt. Momenteel zijn we simulaties aan het uitvoeren en wordt het conceptmodel ge 3D print.',
        details: ["./Public/Foto's/Ligier_JS2R_V0_ReImagine_Back.webp", "./Public/Foto's/Ligier_JS2R_V0_ReImagine_front.webp", "./Public/Foto's/Ligier_JS2R_V0_ReImagine_side.webp"],
      },
      {
        label: 'Design en productie — Vakantie',
        desc: 'Tijdens de vakantie ben ik bezig geweest met het uittekenen van een productieklaar paneel. Dit aan de hand van complexe surfaces binnen solidworks. ',
        details: ["", "", ""],
      },
      {
        label: 'Grafisch ontwerp — Tussentijds',
        desc: 'Naast het CAD werk neem ik ook de grafische identiteit van het team op mij. In de zomer van 2025 heb ik gewerkt rond hun nieuw logo en merch. Deze opdrachten zijn niet constant aangezien ik het druk genoeg heb met de technische kant van het team. Het blijft wel bij als een leuke ervaring en een teken van vertrouwen in wat ik doe als grafisch ontwerper.',
        details: ['./Public/Foto\'s/Grafisch/1.png', './Public/Foto\'s/Grafisch/2.png', './Public/Foto\'s/Grafisch/5.png'],
      },
    ],
  },
  {
    title: 'Albatross',
    cat: 'CAD · CFD optimization',
    img: "./Public/Foto's/Albatross.jpg",
    details: ["./Public/Foto's/Albatross2.jpg", "./Public/Foto's/Albatross3.jpg",],
    desc: 'Tijdens de XDW-week volgde ik een workshop rond CFD en ontwerpoptimalisatie onder leiding van Voxdale, samen met Oscar de Wit en Louis de Bie werkten we aan een drone met verwisselbare cargo, geïnspireerd op de albatros. Via CFD-simulaties in AirShaper verfijnden we ons ontwerp. Mijn rol richtte zich op het modelleren van de vleugels.',
    extra: 'Dankzij de CFD-analyse konden we in model 1 kritieke zones identificeren, met name rond de neus, de vleugels en de luchtstroming naar de achterzijde. Na het doorvoeren van onze optimalisaties werden deze aandachtspunten aangepakt, wat duidelijk zichtbaar is in model 2.',
    tags: ['CAD', 'CFD'],
    bg: '#0a0d14',
  },
  {
    title: 'CuraNova',
    cat: 'UX design · Healthcare',
    img: "./Public/Foto's/CuraNova.webp",
    details: ["./Public/Foto's/CuraNova2.webp", "./Public/Foto's/CuraNova3.webp"],
    desc: 'In het kader van het vak User-Centered Design ontwikkelden we een product binnen een specifieke context, gebaseerd op Embodied Interactions en UX-theorie. De focus lag op de interactie tussen gebruiker en product, waarbij we theoretische inzichten vertaalden naar een tastbaar ontwerp. We kozen voor context drie: het ontwerpen van een product voor een dienst waarmee mensen met mentale gezondheidsproblemen anoniem steunende digitale brieven kunnen ontvangen van lotgenoten. Voor dit project werkte ik samen met Falke van den Heuvel.',
    tags: ['Figma', 'UX', 'Healthcare'],
    bg: '#120e06',
  },
  {
    title: 'Sketching',
    cat: 'Photoshop · Vizcom',
    img: "./Public/Foto's/DigitaalConcepttekenen.jpg",
    details: ['', '', ''],
    slideshow: [
      { src: "./Public/Foto's/Schets1.webp", label: 'Schets 1' },
      { src: "./Public/Foto's/Schets2.webp", label: 'Schets 2' },
      { src: "./Public/Foto's/Schets3.webp", label: 'Schets 3' },
      { src: "./Public/Foto's/Schets4.webp", label: 'Schets 4' },
      { src: "./Public/Foto's/Grafisch/RoeffaersLab.png", label: 'RoeffaersLab' },
      { src: "./Public/Foto's/Grafisch/PlaSeatic P and particles.png", label: 'PlaSeatic' },
      { src: "./Public/Foto's/Grafisch/DreamCarCollective_V4.png", label: 'Dream Car Collective' },
      { src: "./Public/Foto's/Grafisch/Sama Massages.png", label: 'Sama Massages' },
    ],
    desc: 'Tijdens mijn opleidingen Product Design en Product Ontwikkeling heb ik verschillende lessen gekregen over digitaal tekenen. Hier gebruik ik grotendeels photoshop voor. Ook om renders masteren qua licht en reflecties. Daarnaast gebruik ik ook Vizcom om snel concepten te visualiseren.',
    tags: ['Photoshop', 'Vizcom', 'Sketching'],
    bg: '#120e06',
  },
  {
    title: 'Be-Flow',
    cat: 'CAD · Conceptual design',
    img: "./Public/Foto's/BeFlow1.webp",
    details: ['', "./Public/Foto's/BeFlow3.webp", "./Public/Foto's/BeFlow4.webp"],
    desc: 'Be-Flow is een ontwerpconcept waarbij aerodynamica de vorm bepaald. In plaas van luchtstromen te weerstaan worden deze ontarmd en gebruikt om de vorm te creëren. In mijn concept zijn er drie ontwerpen gemaakt. Een stoel, lamp en wijnhouder. De drie ontwerpen zijn in deze volgorde ontworpen. Het tekenen in Fusion van deze modellen was een groeiproces, maar dankzij hun T spline form en mijn ervaring met het Echo project heeft hier bij geholpen.Met de functie van de objecten in het achterhoofd wordt de vorm door de "wake" vereenvoudigd en omgevormd tot een organish object.',
    tags: [],
    bg: '#120e06',
  },
  {
    title: 'Advanced CAD',
    cat: 'CAD · Advanced modeling',
    desc: 'Een verzameling van projecten waarin ik complexe CAD-modellen en surfaces uitwerk.',
    tags: ['CAD', 'Surfaces'],
    bg: '#0f1118',
  },
  {
    title: 'Echo',
    cat: 'CAD · CFD optimization',
    img: "./Public/Foto's/Echo.jpg",
    details: ['', '', ''],
    desc: 'Echo is een Bachelor project omtrent vorm en CFD optimalisatie. Door gebruik te maken van Fusion en de Nurb modeling functie is het mogelijk om een organische vorm te creëren zonder complexe surfaceing. Deze vorm is vervolgens geanalyseerd door middel van CFD simulaties in Autodesk CFD. Dit was het eerste project met deze software, het is ook allemaal zelf studie geweest waardoor het voor mij een zeer complex, maar interessant en leerrijk project is geworden. Tijdens dit project ben ik ook gelimiteerd geweest door de kracht van de computer. Dit omdat de mesh te complex was voor de computer.',
    extra: '',
    tags: ['CAD', 'CFD'],
    bg: '#120e06',
  },
  {
    title: 'Tribute Table',
    cat: 'CAD · Production',
    img: "./Public/Foto's/TributeTable.webp",
    details: ["./Public/Foto's/TributeTable3.webp", "./Public/Foto's/TributeTable2.webp"],
    desc: 'Voor het vak multiple design heb ik een tafel ontworpen. Deze tafel is qua kleuren gebaseerd op verschillende iconische liveries van Mclaren. Dit ontwerp zorgde voor het daadwerkelijk gebruik maken van afwerkingstechnieken. Zo is het frame gepoedercoat, de modulaire delen ge 3D print en de plaat gepolished en ge wet-sand',
    tags: [],
    bg: '#120e06',
  },
  {
    layout: 'quad-group',
    bg: '#0a0d14',
    items: [
      { title: 'RoeffaersLab',         img: "./Public/Foto's/Grafisch/RoeffaersLab.png" },
      { title: 'PlaSeatic',            img: "./Public/Foto's/Grafisch/PlaSeatic P and particles.png" },
      { title: 'Hydroteam Logo',       img: "./Public/Foto's/Grafisch/Logo Hydroteam.png" },
      { title: 'Dream Car Collective', img: "./Public/Foto's/Grafisch/DreamCarCollective_V4.png" },
      { title: 'Jij Bent De Zomer',    img: "./Public/Foto's/Grafisch/JijBentDeZomer.jpeg" },
      { title: 'Rough Edges',          img: "./Public/Foto's/Grafisch/RoughEdgesVierkant.jpeg" },
      { title: 'Stof',                 img: "./Public/Foto's/Grafisch/stof.png" },
      { title: 'Sama Massages',        img: "./Public/Foto's/Grafisch/Sama Massages.png" },
      { title: '2Punt8',               img: "./Public/Foto's/Grafisch/2Punt8.png" },
      { title: 'Ski-Gaper',            img: "./Public/Foto's/Grafisch/Ski-Gaper.png" },
    ],
  },
];

/* ── PLACEHOLDER ── */
function placeholder(w, h, bg, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" fill="${bg}"/>
    <text x="${w / 2}" y="${h / 2}" font-family="Space Grotesk, sans-serif" font-size="18"
      fill="rgba(242,242,240,0.15)" text-anchor="middle" dominant-baseline="middle"
      letter-spacing="6" font-weight="300">${(label || '').toUpperCase()}</text>
  </svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function escapeHTML(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderPhotoTrio(photos, altPrefix = 'detail') {
  return (photos || [])
    .filter(Boolean)
    .map((src, index) => `
      <div class="exp-photo-trio">
        <img src="${src}" alt="${altPrefix} ${index + 1}" loading="lazy">
      </div>
    `)
    .join('');
}

function renderSketchSlideshow(slides) {
  if (!slides?.length) return '';

  const slideMarkup = slides.map((slide, index) => `
    <figure class="sketch-slide" data-slide="${index}">
      <img src="${slide.src}" alt="${escapeHTML(slide.label || `sketch ${index + 1}`)}" loading="${index === 0 ? 'eager' : 'lazy'}">
      <figcaption>${escapeHTML(slide.label || `Sketch ${index + 1}`)}</figcaption>
    </figure>
  `).join('');

  return `
    <div class="sketch-gallery">
      ${slideMarkup}
    </div>
  `;
}

function projectPanelHTML(project) {
  if (project.chapters?.length) {
    const chapterMarkup = project.chapters.map((chapter, index) => {
      const chapterPhotos = renderPhotoTrio(chapter.details, `chapter ${index + 1}`);
      const introBlock = index === 0
        ? `<div class="exp-title">${escapeHTML(project.title || '')}</div><div class="exp-cat">${escapeHTML(project.cat || '')}</div>`
        : '';
      const extraBlock = chapter.extra
        ? `<div class="exp-row--extra"><p class="exp-extra">${escapeHTML(chapter.extra)}</p></div>`
        : '';

      return `
        <div class="exp-row--main">
          <div class="exp-text">
            <div>
              ${introBlock}
              ${chapter.label ? `<div class="exp-chapter-label">${escapeHTML(chapter.label)}</div>` : ''}
              <p class="exp-desc">${escapeHTML(chapter.desc || '')}</p>
            </div>
          </div>
        </div>
        ${chapterPhotos ? `<div class="exp-row--trio">${chapterPhotos}</div>` : ''}
        ${extraBlock}
      `;
    }).join('');

    const projectExtra = project.extra
      ? `<div class="exp-row--extra"><p class="exp-extra">${escapeHTML(project.extra)}</p></div>`
      : '';

    return `${chapterMarkup}${projectExtra}`;
  }

  const photos = renderPhotoTrio(project.details);
  const slideshow = renderSketchSlideshow(project.slideshow);

  return `
    <div class="exp-row--main">
      <div class="exp-text">
        <div>
          <div class="exp-title">${escapeHTML(project.title || '')}</div>
          <div class="exp-cat">${escapeHTML(project.cat || '')}</div>
          <p class="exp-desc">${escapeHTML(project.desc || '')}</p>
        </div>
      </div>
    </div>
    ${slideshow || (photos ? `<div class="exp-row--trio">${photos}</div>` : '')}
    ${project.extra ? `<div class="exp-row--extra"><p class="exp-extra">${escapeHTML(project.extra)}</p></div>` : ''}
  `;
}

function createProjectSlice(project, index) {
  const num = String(index + 1).padStart(2, '0');
  const src = project.img || placeholder(3240, 1350, project.bg, project.title);

  const slice = document.createElement('div');
  slice.className = 'slice';
  slice.setAttribute('role', 'button');
  slice.setAttribute('tabindex', '0');
  slice.setAttribute('aria-label', `Open project: ${project.title}`);
  slice.setAttribute('aria-expanded', 'false');

  slice.innerHTML = `
    <img src="${src}" alt="${escapeHTML(project.title)}" loading="lazy">
    <div class="slice-index">${num}</div>
    <div class="slice-over">
      <div class="slice-meta">
        <span class="slice-title">${escapeHTML(project.title)}</span>
        <div class="slice-line"></div>
        <span class="slice-cat">${escapeHTML(project.cat)}</span>
      </div>
    </div>
    <div class="exp-panel">
      ${projectPanelHTML(project)}
      <div class="exp-close">↑ Sluiten</div>
    </div>
  `;

  const toggleOpen = () => {
    const isOpen = slice.classList.contains('open');
    document.querySelectorAll('.slice.open').forEach((item) => {
      item.classList.remove('open');
      item.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      slice.classList.add('open');
      slice.setAttribute('aria-expanded', 'true');
    }
  };

  slice.addEventListener('click', (event) => {
    if (event.target.closest('.exp-close')) {
      slice.classList.remove('open');
      slice.setAttribute('aria-expanded', 'false');
      return;
    }

    toggleOpen();
  });

  slice.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleOpen();
    }
  });

  return slice;
}

function createQuadGroup(project) {
  const row = document.createElement('div');
  row.className = 'quad-row';

  project.items.forEach((item) => {
    const cell = document.createElement('div');
    cell.className = 'quad-cell';
    const src = item.img || placeholder(648, 648, project.bg, item.title);
    cell.innerHTML = `<img src="${src}" alt="${escapeHTML(item.title)}" loading="lazy">`;
    row.appendChild(cell);
  });

  return row;
}

/* ── RENDER FEED ── */
const feed = document.getElementById('feed');

if (!feed) {
  throw new Error('The #feed element was not found.');
}

const productDesignHeader = document.createElement('div');
productDesignHeader.className = 'section-heading';
productDesignHeader.id = 'product-design';
productDesignHeader.textContent = 'Product Design';
feed.appendChild(productDesignHeader);

projects.forEach((project, index) => {
  if (project.layout === 'quad-group') {
    const graphicDesignHeader = document.createElement('div');
    graphicDesignHeader.className = 'section-heading';
    graphicDesignHeader.id = 'grafisch-design';
    graphicDesignHeader.textContent = 'Grafisch Design';
    feed.appendChild(graphicDesignHeader);
    feed.appendChild(createQuadGroup(project));
    return;
  }

  feed.appendChild(createProjectSlice(project, index));
});

/* ── ABOUT ── */
const about = document.createElement('section');
about.id = 'about';
about.className = 'about-section';
about.innerHTML = `
  <div class="about-divider">
    <span class="about-divider-label">Over mij</span>
  </div>
  <div class="about-main">
    <div class="about-block">
      <div class="about-name">Joren<br>Lenaerts</div>
      <div class="about-role">Student · AP Antwerpen</div>
      <p class="about-bio">Als ontwerper en als persoon ben ik sterk verwonderd door mijn omgeving. Details en kleine imperfecties vallen mij snel op, waardoor ik steeds kritisch maar met een open blik naar mijn omgeving en mijn eigen werk kijk. Deze nieuwsgierigheid en kritische houding stimuleren mij om mezelf voortdurend te ontwikkelen.

Daarnaast ben ik een sociaal persoon die zich gemakkelijk aanpast aan nieuwe situaties en graag met verschillende mensen samenwerkt. Een belangrijke interesse binnen mijn ontwerpopleiding is CAD en productiegericht tekenen. Deze technische vaardigheden komen binnen HydroTeam goed van pas en bieden mij de mogelijkheid om mijn kennis in een praktische en technische context toe te passen.

Naast het technische aspect speelt automotive design een grote rol in mijn ontwikkeling als ontwerper. Mijn passie voor auto’s en automotive design vormt de belangrijkste motivatie binnen mijn ontwerpen en bepaalt mee het carrièrepad dat ik in de toekomst wil volgen.</p>
    </div>
    <div class="about-photo-block">
      <img src="./Public/Foto's/Profielfoto2.jpeg" alt="Joren Lenaerts">
    </div>
  </div>
`;
feed.after(about);

/* ── SCROLL OBSERVER ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), idx * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.slice').forEach(s => observer.observe(s));

document.querySelector('a[href="#about"]')?.addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});