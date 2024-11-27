// Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

function numero(Num1, Num2) {
    if (Num1 === 50 || Num2 === 50 || (Num1 + Num2 === 50)) {
        console.log("true");
    } else {
        console.log("false");
    }
}

numero(30, 20); //  condizione tre
numero(50, 0);  //  condizione una
numero(15, 35); //  condizione tre 
numero(10, 25); //  nessuna condizione
numero(0, 50); // condizione due


//Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione 
//come parametri e ritorna la stringa modificata.

function rimuoviCarattere(stringa, posizione) {
    return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
}
console.log(rimuoviCarattere("Buonasera", 3));  // Rimozione quarto carattere 
console.log(rimuoviCarattere("Javascript", 4)); // Rimozione quinto carattere
console.log(rimuoviCarattere("ciao", 0));     // Rimozione primo carattere


//Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna 'true' se rispetta 
//queste condizioni altrimenti 'false'

function controllo(Num1, Num2) {
    if (
        (Num1 >= 40 && Num1 <= 60 && Num2 >= 40 && Num2 <= 60) ||
        (Num1 >= 70 && Num1 <= 100 && Num2 >= 70 && Num2 <= 100)
    ) {
        console.log('true');
    } else {
        console.log('false');
    }
}

controllo(50, 50); //condizione vera
controllo(30, 50); //condizione falsa
controllo(80, 80); //condizione vera
controllo(55, 60); //condizione vera


//Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New"
//altrimenti ritorni 'false',

function città(nome) {
    if (
        (nome.startsWith('Los')) ||
        (nome.startsWith('New'))
    ) {
        console.log(nome);
    } else {
        console.log('false');
    }

}

città('NewYork');
città('LosAngeles');
città('Avellino');


// Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
//L'array deve essere passato come parametro.

function sommaarray(array) {
    let somma = 0
    for (let i = 0; i < array.length; i++) {
        somma += array[i];
    }
    return somma;
}

console.log(sommaarray([1, 2, 3, 4, 5, 6]));


//Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna 'true', altrimenti
//ritorna 'false'

function controlloarray(arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return false;
    } else {
        return true;
    }

}

console.log(controlloarray([1, 2, 3, 4, 5]));
console.log(controlloarray([0, 2, 4, 6]));


//Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
//Angolo Acuto: meno di 90°  => ritorna 'acuto';
//Angolo Ottuso: tra i 90° e i 180° gradi => ritorna 'ottuso';
//Angolo Retto: 90° => ritorna 'retto';
// Angolo Piatto: 180°  => ritorna 'piatto';

function tipoangolo(gradi) {
    if (gradi < 90) {
        console.log('acuto')
    } else if (gradi > 90 && gradi < 180) {
        console.log('ottuso')
    } else if (gradi === 90) {
        console.log('retto')
    } else if (gradi === 180) {
        console.log('piatto')
    }
}


tipoangolo(80) //acuto
tipoangolo(102) //ottuso
tipoangolo(90) //retto
tipoangolo(180) //piatto


//Crea una funzione che crei un acronimo a partire da una frase: Es "Fabbrica Italina Automobili Torino" deve ritornare "Fiat"

function acronimo (frase) {
    let iniziali='';
    const parole = frase.split(' ');
    for (let i=0; i< parole.length; i++) {
        iniziali += parole[i][0].toUpperCase();
    }
    return iniziali
}

console.log(acronimo('NATIONAL AERONAUTICS SPACE ADMINISTRATION'));