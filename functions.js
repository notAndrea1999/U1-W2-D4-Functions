// APPROCCIO DRY - Don't Repeat Yourself

// FUNZIONI

// una funzione e' un blocco di codice riutilizzabile
// PUO' ricevere dei dati in input (parametri o argomenti)
// PUO' tornare un risultato (valore di ritorno)

// definiamo una funzione semplice senza input e output
function bark() {
  // all'interno dello 'scope' della funzione vado a defnire le operazioni da eseguire in sequenza dall'alto verso il basso
  console.log("BAU");
}

// in console in questo momento non c'e' nulla
// DEFINIRE una funzione non significa eseguirla

// utilizzare le parentesi dopo l'identificativo della funzione si definisce INVOCAZIONE della funzione
bark();

// VALORI DI RITORNO - Quando la funzione ha un OUTPUT (facoltativo)
function sum() {
  // la variabile result e' interna e sara; necessario ritornare il valore per averne accesso
  let result = 10 + 1;
  // console.log("Result:", result);
  return result; // nel caso in cui return non fosse presente nella funzione il console.log() della funzione stessa tornera' undefined
}

// console.log(result); // result non esiste nel contesto esterno della funzione
console.log("LOG ESTERNO:", sum());

const x = sum(); // catturiamo il valore di output di una funzione in una variabile, eseguire una funzione fruttifera equivale a ricevere il suo valore di ritorno
const y = bark(); // tornera' undefined in quanto non e' una funzione fruttifera

// il risultato tornato dall'eseguire sum() lo possiamo combinare con altre operazioni
const z = x + 10;
const j = x + " !";

console.log(x, y, z, j);

// Esempio di VOID function (non fruttifera)
// la variabile e' esterna e sara' sempre leggibile da qualsiasi punto successivo del nostro file
let number = 0;

function sum2() {
  // side effect - modifica qualcosa nel contesto esterno, e NON RITORNA NULLA
  number += 2 + 6; //number = number + (2+6)
}

console.log(number); // 0
sum2();
console.log(number); // 8
sum2();
console.log(number); // 16

const animals = ["Parrot", "Mouse", "Bunny", "Cat", "Dog", "Goldfish", "Horse"];

function replaceElement() {
  //   const copiedArray = animals.concat();
  const copiedArray = animals.slice();
  const newElement = "Dragon";

  let positionIndex = null;

  for (let i = 0; i < copiedArray.length; i++) {
    const stringToVerify = copiedArray[i];
    if (stringToVerify === "Bunny") {
      //se stimao qua l'indice i e' quello che cerchiamo!
      positionIndex = i;
    }
  }

  copiedArray.splice(positionIndex, 1, newElement);

  -console.log(animals); // mostrera' l'array originale non modificato
  console.log(copiedArray); // mostrera' il nuovo array creato con .slice() identico al primo ma modificato

  return copiedArray;
}

const replacedAnimals = replaceElement();

console.log("REPLACED ARRAY:", replacedAnimals);

// Quando una funzione riceve valori in ingresso: INPUT
// gli input nella definizione sono chiamati PARAMETRI
// nella definizione di funzione io stablisco la POSSIBILITA' di ricevere valori in ingresso
// rappresentati da dei segnaposto che assumeranno i valori passati come ARGOMENTO al momento dell'esecuzione della funzione
function smartSum(n1, n2) {
  const total = n1 + n2;
  return total;
}

// gli input nella esecuzione della funzione sono chiamati ARGOMENTI della funzione
console.log(smartSum(5, 8));
console.log(smartSum(10, 5));
console.log(smartSum(1000, 1));

function sayHi(str) {
  console.log("Ciao! " + str + " benvenuto in EPICODE!");
}

const arrOfNames = ["Andrea", "Emanuele", "Vincenzo", "Lorenzo"];

// sayHi("Andrea")
// sayHi("Emanuele")
// sayHi("Vincenzo")
// sayHi("Lorenzo")

for (let i = 0; i < arrOfNames.length; i++) {
  sayHi(arrOfNames[i]);
}

function replaceElementCustom(arr, positionIndex, newElement) {
  //   const copiedArray = animals.concat();
  const copiedArray = arr.slice();
  //   const newElement = "Dragon";
  //   let positionIndex = null;

  // for (let i = 0; i < copiedArray.length; i++) {
  //   const stringToVerify = copiedArray[i];
  //   if (stringToVerify === "Bunny") {
  //     //se stimao qua l'indice i e' quello che cerchiamo!
  //     positionIndex = i;
  //   }
  // }

  copiedArray.splice(positionIndex, 1, newElement);

  return copiedArray;
}

const newAnimals = replaceElementCustom(animals, 3, "Dragon");
const newAnimals2 = replaceElementCustom(["Cavallo", "Mucca", "Topo", "Colibri"], 2, "Mickey");
console.log(newAnimals);
console.log(newAnimals2);
