/*
    JSNACK3
    Si scriva una funzione che accetti tre argomenti , un array e due numeri ( a più piccolo di b).
    La funzione ritornerà un nuovo array che hannno la posizione compresa tra i due numeri.

 */

    const myArray = ['Daniele', 'Carlo','Vito','Anna','Chiara'];

    let min = parseInt( prompt('Inserisci un numero tra 0 e 5'));
    // controllo
    while (isNaN(min || min < 0 || min >= myArray.length) ){
        min = parseInt( prompt('Inserisci un numero tra 0 e 5'));
    }
    
    let max = parseInt( prompt('Inserisci un numero tra ' + min + ' e 5'));
    // controllo 
    while (isNaN(max || max < min || max >= myArray.length) ){
        max = parseInt( prompt('Inserisci un numero tra 0 e 5'));
    }
    
    let newArray = [];

    /*
    
        function filterArray(arr, min, max) {
            for (let i = 0; i < arr.length; i++) {
                const tmp = arr[i];
                if(min <= i && max >= i){
                    newArray.push(tmp);
                }
            }
        }
    */
    /*
        // FILTER
        filterArray(myArray, min, max);
        console.log(newArray);
    
        const newFilterArray = myArray.filter((element,index) => {
            return min <= index && max >= index;
        });
    
        console.log(newFilterArray);
    */
        
    // FOREACH

    function filterArray(min, max) {
        myArray.forEach((element, index) => {
            if(min <= index && max >= index){
                newArray.push(element);
            }
        });
    }
    
    filterArray(min, max);
    
    
    console.log(newArray);
    
    
  