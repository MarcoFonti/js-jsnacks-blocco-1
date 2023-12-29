// Check 
console.log('JS OK LIST');

//Creo Array 
const fruit = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.table(fruit);

//Aggiungo la Pesca all'Array
fruit.splice(0, 0, 'Pesca');
console.table(fruit);

//Creo ciclo For
for(let i = 0; i < fruit.length; i++){
    // Metodo if else
    if(fruit.includes('cocomero')) {
        console.log("Trovato! Devo solo preparare il cocktail.")
    } else {
        console.log("Oh no, devo uscire a comprare il cocomero!")
    }
}
