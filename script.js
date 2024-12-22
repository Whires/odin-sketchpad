const pad = document.querySelector('#pad-container');
const button = document.querySelector('#change');


createPads();

const pads = document.querySelectorAll('.pad');
  
  pads.forEach(div => div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = 'black';
  }));


button.addEventListener('click', (e) => {
 changePads();
})


function changePads() {
  const nmb = parseInt(prompt("Please enter a number: "));
  while(pad.firstChild) 
    pad.removeChild(pad.firstChild)
  for (let i = 1; i <= nmb*nmb; i++) {
    const padElement = document.createElement('div');
    padElement.classList.add('pad');
    ('pad');
    pad.appendChild(padElement);
  }
  document.getElementById("pad-container").style.height = nmb*20 + 'px';
  document.getElementById("pad-container").style.width = nmb*20 + 'px';

  const pads = document.querySelectorAll('.pad');
  
  pads.forEach(div => div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = 'black';
  }));
}

function createPads() {
  for (let i = 1; i <= 256; i++) {
    const padElement = document.createElement('div');
    padElement.classList.add('pad');
    ('pad');
    pad.appendChild(padElement);
  }
  
}
