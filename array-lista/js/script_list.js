// Check 
console.log('JS OK LIST');

/* CREO UN ARRAY */
const fruit = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];


/* CONTROLLO RISPOSTA */
console.table(fruit);


/* METTO ALL'INIZIO DELL'ARRAY LA PAROLA */
fruit.splice(0, 0, 'Pesca');


/* CONTROLLO RISPOSTA */
console.table(fruit);


/* CICLO FOR PER LA LUNGHEZZA DELL'ARRAY E INCREMENTO DI 1 */
for(let i = 0; i < fruit.length; i++){
    
    /* SE NELL'ARRAY E INCLASA LA PAROLA COCOMERO */
    if(fruit.includes('cocomero')) {

        /* STAMPO IN CONSOLE  */
        console.log("Trovato! Devo solo preparare il cocktail.")

        /* ALTRIMENTI  */
    } else {

        /* STAMPO IN CONSOLE */
        console.log("Oh no, devo uscire a comprare il cocomero!")

    }

}
