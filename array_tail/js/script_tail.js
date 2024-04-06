// Check 
console.log('JS OK TAIL');

/* RECUPERO ELEMENTI ID */
const userNumberElement = document.getElementById('userNumber');
const userButtonElement = document.getElementById('userButton');
console.log(userNumberElement, userButtonElement);

/* CREO UN ARRAY VUOTO PER MANIPOLARLO DENTRO ALLA CONDIZIONE */
const number = [];

/* CREO EVENTO AL CLICK DEL BOTTONE INVIA */
userButtonElement.addEventListener('click', function(){

    /* CREO UNA VARIBILE A CUI ASSEGNO IL VALORE DELL'INPUT */
    const valueUser = userNumberElement.value;

    /* CONTROLLO RISPOSTA */
    console.log(valueUser);

    /* CICLO FOR CHE SI FERMA QUANDO LA I E MINORE O UGUALE AL VALORE DELL'UTENTE */
    for(let i = 1; i <= valueUser; i++){
        
        /* CREO NUMERO RANDOM */
        const randomUser = Math.floor(Math.random() * 100) + 1
        
        /* METTO NEL ARRAY VUOTO IL NUMERO RANDOM */
        number.push(randomUser);
    }
})

/* CONTROLLO RISPOSTA */
console.log(number);


