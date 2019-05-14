// Your code goes

////// Mouse over /////////
const headerImg = document.querySelector('.home .intro img');

function blurImg() {
  headerImg.style.filter = 'blur(5px)';
}

headerImg.addEventListener('mouseover', blurImg);

////// Scroll Event ///////

// Generate random color
function getRandomColor() {
  let hexCode = '0123456789ABCDEF',
    hexColor = '#';

  for (let i = 0; i < 6; i++) {
    hexColor += hexCode[Math.floor(Math.random() * 16)];
  }

  return hexColor;
}

// Change background color
function changeBgColor(e) {
  document.body.style.backgroundColor = getRandomColor();
}

window.addEventListener('scroll', changeBgColor);
