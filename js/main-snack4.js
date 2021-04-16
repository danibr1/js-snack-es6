/*
    SNACK4

 */

// MAP - aggiunta nuova proprietà

const arrayObj = [
    {name: 'AAA', type :'tshirt', color : 'red'},
    {name: 'BBB', type :'occhiali', color : 'blue'},
    {name: 'CCC', type :'scarpe', color : 'black'},
    {name: 'DDD', type :'borsa', color : 'pink'},
];

const newArrayObj = arrayObj.map( (element) =>{
    const newElement = {
        ...element,
        position: randomNumber(0,5)
    } 
    return newElement;
});


function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

console.log(newArrayObj);