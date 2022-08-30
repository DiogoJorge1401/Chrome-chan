const GITHUB_URL = 'https://raw.githubusercontent.com/DIEGOHORVATTI/wallpaper/main/'

const style = document.body.style;

const mainColorsSelectors = {
  toolButton: '#hdtb-tls',
  allNavButton: '.hdtb-mitem',
  navLinks: '.hdtb-mitem a',
  moreButton: '.GOE98c',
  footballTitle: '.ofy7ae'
}

const backgroundMain = {
  searchBar: '.RNNXgb'
}

Object
  .entries(mainColorsSelectors)
  .forEach(el => {
    const element = document.querySelectorAll(el[1])
    element.forEach(eachEl => eachEl.classList.add('featuredColor'))
  }
  )
Object
  .entries(backgroundMain)
  .forEach(el => {
    const element = document.querySelectorAll(el[1])
    element.forEach(eachEl => eachEl.classList.add('background'))
  }
  )

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function image() {
  style.backgroundImage = `
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url(${GITHUB_URL}${getRandomIntInclusive(1, 421)}.png)
  `;
  style.backgroundRepeat = "no-repeat";
  style.backgroundPosition = "top";
  style.backgroundAttachment = "fixed";
  style.backgroundSize = "cover";
}

image();

setInterval(() => {
  image();
}, 30000);
