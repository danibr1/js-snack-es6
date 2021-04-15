// JSNACK 2
/*

A
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.

B.
Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti

C.
Creiamo una nuovo array i cui elementi contegono solo nomi e falli subiti e stampiamo tutto in console.

*/


// A
let teams = [
    {
        nome: 'PSG',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },
];

// B
for (let i = 0; i < teams.length; i++){
    var team = teams[i];

    team.puntiFatti = randomNumber(0, 10);
    team.falliSubiti = randomNumber(0, 10);
}

console.table(teams);

// C
let newTeam = [];
for (let i = 0; i < teams.length; i++){
    let team = teams[i];

    newTeam.push({
        nome: team.nome,
        falliSubiti: team.falliSubiti,
    });
}

console.table(newTeam);


/**
 * Gen numeri random
 */
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}