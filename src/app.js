const who = ["Mi HTML","El CSS","El navegador","El div principal" ];

const action = ["desapareció","se desalineó","entró en pánico","me mostró 87 errores sin razón"];

const what = ["justo cuando lo tenía bonito","después de agregar un div más","después de usar position:absolute","cuando intenté centrar algo"];

const when = ["y ahora nada funciona", "y me dio miedo tocarlo otra vez","así que tuve que empezar de cero","y pensé: «ya lo arreglo mañana»"];


const images = [
  ["Mi HTML", "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"],
  ["El CSS", "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"],
  ["El navegador", "https://upload.wikimedia.org/wikipedia/commons/d/d3/Internet_Explorer_9_icon.svg"],
  ["El div principal", "https://i.sstatic.net/KvsHF.png"] ];

const random = arr => arr[Math.floor(Math.random() * arr.length)];


function generate() {
  const excuse = `${random(who)} ${random(action)} ${random(what)} ${random(when)}.`;
  document.querySelector("#excuse").innerHTML = excuse;
  document.querySelector("#imageRow").classList.remove("d-none");

  const cards = document.querySelectorAll("#imageRow > div");
  const imgData = images.slice(0, 4); 

  cards.forEach((card, i) => {
    const [title, url] = imgData[i];
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${url}" class="card-img-top p-3" alt="${title}" />
        <div class="card-body">
          <h6 class="card-title text-dark">${title}</h6>
        </div>
      </div>`;
  });
}


document.getElementById("generate").addEventListener("click", generate);