/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
};
console.log(area(24, 12));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  let total = 0;
  if (n1 !== n2) {
    total = n1 + n2;
  } else if (n1 === n2) {
    total = (n1 + n2) * 3;
  }
  return total;
};
console.log(crazySum(8, 14));
console.log(crazySum(14, 14));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num1, num2 = 19) {
  let total1 = 0;
  if (num1 <= 19) {
    total1 = Math.abs(num1 - num2);
  } else if (num1 > 19) {
    total1 = Math.abs((num1 - num2) * 3);
  }
  return total1;
};
console.log(crazyDiff(6));
console.log(crazyDiff(31));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  let answer = 0;
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  }
  return false;
};
console.log(boundary(87));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (str) {
  let result2 = "";
  if (str !== "EPICODE") {
    result2 = "EPICODE" + " " + str;
  } else if (str === "EPICODE") {
    result2 = str;
  }
  return result2;
};
console.log(epify("Best in town"));
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num4) {
  //   num4 = Math.abs(num4);
  let result1 = "";
  if (num4 % 7 === 0) {
    result1 = "Il numero e' multiplo di 7";
  } else if (num4 % 3 === 0) {
    result1 = "Il numero e' multiplo di 3";
  } else {
    result1 = "Impara la matematica";
  }
  return result1;
};
console.log(check3and7(-375));
console.log(check3and7(-28));
console.log(check3and7(-94));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str1) {
  let splitStr = str1.split("");
  let reverseArr = splitStr.reverse();
  let joinArr = reverseArr.join("");
  return joinArr;
};
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
  let newString = str.split(" ");
  let capitalizedLetters = [];
  for (let i = 0; i < newString.length; i++) {
    let word = newString[i];
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedLetters.push(capitalizedWord);
  }
  let result = capitalizedLetters.join(" ");
  return result;
}
console.log(upperFirst("hello my friend"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (stri) {
  let splitStr1 = stri.split("");
  let spliceStr = splitStr1.splice(0, 1);
  splitStr1.splice(-1, 1);

  let joinArr1 = splitStr1.join("");

  return joinArr1;
};
console.log(cutString("grande"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (number) {
  let arrN = [];
  for (let i = 0; i < 10; i++) {
    number = Math.floor(Math.random() * 10 + 1);
    arrN.push(number);
  }

  return arrN;
};
console.log(giveMeRandom(10));
