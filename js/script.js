// Descrizione esercizio:
//1 Chiedi all’utente il suo nome,
//2 poi chiedi il suo cognome,
//3 poi chiedi il suo colore preferito
//4 Infine scrivi sulla pagina nomecognomecolorepreferito21

const name = prompt("come ti chiami");
console.log(name);

const surname = prompt("bravo,ora il tuo cognome");
console.log(surname);

let color = prompt ("ma sei un genio, adesso il colore preferito");
console.log(color);

let numero = 10;
numero = numero + 11;


let somma = `allora ti chiami ${name} ${surname}, il tuo colore preferito è ${color} e numero a caso ${numero}`;

document.getElementById("js").innerHTML = somma;
document.writeln(somma);
console.log(somma);