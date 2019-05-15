// Your code goes

////// Mouse over /////////
const headerImg = document.querySelector('.home .intro img');

function blurImg() {
  headerImg.style.filter = 'blur(5px)';
}

headerImg.addEventListener('mouseover', blurImg);

////// Key Down //////
function hideEverything(event) {
  document.body.style.visibility = 'hidden';
}

document.addEventListener('keydown', hideEverything);

///// Key Up //////
function showEverything(event) {
  document.body.style.visibility = 'visible';
}

document.addEventListener('keyup', showEverything);

////// Wheel ///////
const destinationImg = document.querySelector('.content-destination img');

function zoom(event) {
  event.preventDefault();

  destinationImg.style.transform = 'scale(2)';
}

destinationImg.addEventListener('wheel', zoom);

////// Drag and Drop //////
const imgContent = document.querySelectorAll('.img-content img'),
  textContent = document.querySelectorAll('.text-content'),
  contentSectionDiv = document.querySelectorAll('.content-section div');

imgContent.forEach(img => {
  contentSectionDiv.forEach(item => {
    function dragStart() {
      item.style.border = 'none';
    }

    function dragEnter(event) {
      event.preventDefault();
      item.style.border = '3px dashed yellow';
    }

    function dragOver(event) {
      event.preventDefault();
      item.style.border = '3px dashed yellow';
    }

    function dragLeave() {
      item.style.border = 'none';
    }

    function dragDrop() {
      item.append(img);
    }

    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
  });
});

/////// Load Event ////////
function alertLoaded(event) {
  alert('Page Loaded!');
}

window.addEventListener('load', alertLoaded);

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

///// Select /////
const header = document.querySelector('.main-navigation');
logoHeading = document.querySelector('.logo-heading');

function insertInput(event) {
  // Stops logo heading click from bubbling up to header
  event.stopPropagation();
  console.log('logo heading clicked');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('value', 'FUN Bus!!!!');

  header.prepend(input);

  function changeParagraph(event) {
    const paragraphs = document.querySelectorAll('p'),
      selection = event.target.value.substring(
        event.target.selectionStart,
        event.target.selectionEnd
      );

    paragraphs.forEach(paragraph => {
      paragraph.textContent = selection;
    });
  }

  input.addEventListener('select', changeParagraph);
}
function checkPropPropagation() {
  console.log('Header Clicked');
}

///// Click /////

header.addEventListener('click', checkPropPropagation);
logoHeading.addEventListener('click', insertInput);

////// Double Click ////////
const btn = document.querySelectorAll('.btn');

function playMusic() {
  const audio = document.createElement('audio'),
    source = document.createElement('source');
  audio.setAttribute('autoplay', 'true');
  source.setAttribute('src', '../Club Jumpin MP3.mp3');
  audio.appendChild(source);

  document.body.appendChild(audio);
}

btn.forEach(item => {
  item.addEventListener('dblclick', playMusic);
});

///// Prevent Default ///////
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
  });
});
