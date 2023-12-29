// Check 
console.log('JS OK TAIL');

//Prendo Elementi
const userNumberElement = document.getElementById('userNumber');
const userButtonElement = document.getElementById('userButton');
console.log(userNumberElement, userButtonElement);

// Creo Array
const number = [];

// creo Evento
userButtonElement.addEventListener('click', function(){
    // Prendo la risposta dell'utente 
    const valueUser = userNumberElement.value;
    //console.log(valueUser);

    // Creo un ciclo for
    for(let i = 1; i <= valueUser; i++){
        // Random
        const randomUser = Math.floor(Math.random() * 100) + 1
        // Mettiamo i numeri casuali dentro Array
        number.push(randomUser);
    }
})

console.log(number);


