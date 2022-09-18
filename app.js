// https://www.omnicalculator.com/conversion/metric-to-inches

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const inchesRadio = document.getElementById('inchesRadio');
const metersRadio = document.getElementById('metersRadio');

let inches;
let meters = v; 

// labels of the inpust
const variable = document.getElementById('variable');

inchesRadio.addEventListener('click', function() {
  variable.textContent = 'Meters';
  meters = v;
  result.textContent = '';
});

metersRadio.addEventListener('click', function() {
  variable.textContent = 'Inches';
  inches = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(inchesRadio.checked)
    result.textContent = `Inches = ${computeinches().toFixed(5)}`;

  else if(metersRadio.checked)
    result.textContent = `Meters = ${computemeters().toFixed(5)}`;
})

// calculation

function computeinches() {
  return Number(meters.value) * 39.37;
}

function computemeters() {
  return Number(inches.value) / 39.37;
}