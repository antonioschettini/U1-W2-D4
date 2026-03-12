/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  let area = l1 * l2;
  return area;
};
const triangoloProva = area(10, 3);
console.log("Il triangolo ha area:", triangoloProva);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  let somma = n1 + n2;
  if (n1 === n2) {
    return somma * 3;
  } else return somma;
};

const magicaSomma = crazySum(3, 2);
console.log("La somma è", magicaSomma);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
  let differenzaAssoluta = n1 - 19;
  if (differenzaAssoluta > 19) {
    return differenzaAssoluta * 3;
  } else return differenzaAssoluta;
};
const provoLaDifferenzaAssoluta = crazyDiff(50);
console.log(
  "Provo la differenza assoluta, il risultato è: ",
  provoLaDifferenzaAssoluta,
);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n1) {
  numeroCampione = n1;
  if (
    (numeroCampione >= 20 && numeroCampione <= 100) ||
    numeroCampione === 400
  ) {
    return true;
  } else return false;
};
const provaNumero = boundary(401);
console.log("Provo la funzione numero campione", provaNumero);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (parolaInserita) {
  if (parolaInserita.startsWith("EPICODE")) {
    return parolaInserita;
  } else return "EPICODE" + parolaInserita;
};
const provaParola = epify("EPICODE è fantastica");
console.log("Prova dell'epify", provaParola);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  let multiploDi3O7 = n;
  if (multiploDi3O7 % 3 === 0 || multiploDi3O7 % 7 === 0) {
    return true;
  } else return false;
};

const provaCheck3and7 = check3and7(17);
console.log(provaCheck3and7);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (p) {
  return p.split("").reverse().join("");
};

const invertiamoEpicode = reverseString("Epicode");
console.log(invertiamoEpicode);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (p, pp, ppp) {
  let parola1 = p[0].toUpperCase() + p.slice(1);
  let parola2 = pp[0].toUpperCase() + pp.slice(1);
  let parola3 = ppp[0].toUpperCase() + ppp.slice(1);
  return parola1 + " " + parola2 + " " + parola3;
};

const primaLetteraMaiusc = upperFirst("antonio", "stefano", "davide");
console.log(primaLetteraMaiusc);
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (p) {
  return p.slice(1, -1);
};
const tagliaPrimaUltima = cutString("Stefano");
console.log(tagliaPrimaUltima);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (x) {
  let arrayNumeri = [];
  for (let i = 0; i < x; i++) {
    let numeriCasuali = Math.floor(Math.random() * 11);
    arrayNumeri.push(numeriCasuali);
  }
  return arrayNumeri;
};

const pickaQuantiNumeriCasualiVuoi = giveMeRandom(10);
console.log(pickaQuantiNumeriCasualiVuoi);
