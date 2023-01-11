/* SUJET 1 - 
Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.
*/
console.log("----------------------------------------");

const firstSubjectArr1 = [10, 15, 3, 7];
const firstSubjectK1 = 17;
const firstSubjectArr2 = [1, 8, 10, 21];
const firstSubjectK2 = 19;

/* SUJET 2 - 
Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.
*/
const secondSubjectArr1 = [3, 7, 8, 3, 6, 1];
const secondSubjectArr2 = [1, 4, 5, 8];

// Exercice 1
// Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.
const checkSum = (array, num) => {
  const numbers = [...array];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === num) return true;
    }
    return false;
  }
};
console.log("Exercice 1:");
console.log(checkSum(firstSubjectArr1, firstSubjectK1)); // should return true
console.log(checkSum(firstSubjectArr2, firstSubjectK2)); // should return false
console.log("----------------------------------------");

// Exercice 2
// Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.
const getSun = (array) => {
  const buildings = [...array];
  let count = 1;
  for (let i = 0; i < buildings.length - 2; i++) {
    let hasView = true;
    for (let j = i + 1; j < buildings.length - i; j++) {
      if (buildings[i] <= buildings[j]) hasView = false;
    }
    hasView ? count++ : null;
  }
  return count;
};
console.log("Exercice 2:");
console.log(getSun(secondSubjectArr1)); // should return 3
console.log(getSun(secondSubjectArr2)); // should return 1
console.log("----------------------------------------");

// Exercice 3 & 5
// Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).
const checkSum2 = (array, num) => {
  const numbers = [...array];
   let searchValues = new Set();
   searchValues.add(num - numbers[0]);
   for (let i = 1, length = numbers.length; i < length; i++) {
     let searchVal = num - numbers[i];
     if (searchValues.has(numbers[i])) {
       return true;
     } else {
       searchValues.add(searchVal);
     }
   }
   return false;
  // The set.has() method has a run-time complexity of just O(1), meaning that the overall time complexity of this function is linear.
  // Version énervée : const exo3 = (data, k) => data.some((set => n => set.has(n) || !set.add(k - n))(new Set));
};;
console.log("Exercice 3 & 5:");
console.log(checkSum2(firstSubjectArr1, firstSubjectK1)); // should return true
console.log(checkSum2(firstSubjectArr2, firstSubjectK2)); // should return false
console.log("----------------------------------------");

// Exercice 4 & 6 
// Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).
const getSun2 = (array) => {
  const numbers = [...array];
  let counter = 1
  let maxHeight = numbers[numbers.length-1]
  for (i = numbers.length -2; i >= 0; i--) {
    if (numbers[i] > maxHeight) {
      maxHeight = numbers[i]
      counter++
    }      
  }
  return counter
};

console.log("Exercice 4 & 6:");
console.log(getSun2(secondSubjectArr1)); // should return 3
console.log(getSun2(secondSubjectArr2)); // should return 1
console.log("----------------------------------------");