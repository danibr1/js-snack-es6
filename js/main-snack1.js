// JSNACK 1 
/*
    Creare un array di oggetti:
    Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso;
    Stampare a schermo la bici con peso minore utilizzando destructuring e template liferal;
*/

const bike1 = {
    name: 'Pink',
    peso: 7
}

const bike2 = {
    name: 'Red',
    peso: 7.5
}

const bike3 = {
    name: 'Blue',
    peso: 6
}

const bikes = [
   bike1,
   bike2,
   bike3
];

let pesoBiciLeggera = 0;

for(let i = 0; i < bikes.length; i++){
    if(bikes[i].peso < bikes[pesoBiciLeggera].peso ) {
        pesoBiciLeggera = i;
    }
}

document.getElementById('mainbike').innerHTML = 
`
<span class="bikes">${bikes[pesoBiciLeggera].name}:</span>
<span class="bikes">${bikes[pesoBiciLeggera].peso}</span>

`

console.log('La bici più leggera è : ', bikes[pesoBiciLeggera]);