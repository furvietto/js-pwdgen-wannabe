// Descrizione esercizio:
//1 Chiedi all’utente il suo nome,
//2 poi chiedi il suo cognome,
//3 poi chiedi il suo colore preferito
//4 Infine scrivi sulla pagina nomecognomecolorepreferito21

const name = prompt("come ti chiami");
console.log(name);

let cognome = "bravo, ora il tuo cognome";
let allerta = " sono nell'alert"

const surname = prompt(cognome);
console.log(surname);

let color = prompt ("ma sei un genio, adesso il colore preferito");
console.log(color);

let numero = 10;
numero += 11;


let somma = `allora ti chiami ${name} ${surname}, il tuo colore preferito è <span class="colore"> ${color} </span> e numero a caso ${numero}`;

document.getElementById("js").innerHTML = somma + " sono nel getelement";
document.writeln(somma + " sono nel writeln");
alert(somma + allerta);
console.log(somma + "sono nella console");