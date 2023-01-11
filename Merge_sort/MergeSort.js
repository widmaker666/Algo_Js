const fs = require("fs")
const readline = require("readline-sync")

const FileName = process.argv[2];
const data = fs.readFileSync(FileName, "utf8");
const tabData = data.split(" ").map(x => parseInt(x));

console.log(`----------------------------`)
console.log(`-----------Alex.H-----------`)
console.log(`------------2023------------`)
console.log(`-----------*T.H.P*----------`)
console.log(`----------------------------`)


console.log("Voici dans le programme de tri");
console.log(`----------******------------`)
console.log(`1 - Tri par bulles
2 - Tri par selection
3 - Tri par insertion
4 - Tri par quicksort
5 - Tri par mergesort
6 - Tous les Tri
0 - Sortir`);
console.log(`----------******------------`)

const ask = readline.questionInt("Choisis le tri que tu souhaites executer :")
console.log(`----------------------------`)

switch (ask) {    
    case 1:
        const bubbleSort = (arr_numbers) => {
            let numbers = [...arr_numbers];
            let comparaisonsCounter = 0;
            for (let i = 0; i < numbers.length; i++) {
              for (let j = 1; j < numbers.length - i; j++) {
                comparaisonsCounter++;
                if (numbers[j - 1] > numbers[j]) {
                  [numbers[j - 1], numbers[j]] = [numbers[j], numbers[j - 1]];
                }
              }
            }
            return `Tri à bulle/Bubble Sort: ${comparaisonsCounter} comparaisons - [${numbers}]`;
          };
          console.log(bubbleSort(tabData));
          console.log(`----------------------------`)
        break;

    case 2: 
    const selectionSort = (arr_numbers) => {
        let numbers = [...arr_numbers];
        let comparaisonsCounter = 0;
    
        for (let i = 0; i < numbers.length - 1; i++) {
          min = i;
          for (let j = i + 1; j < numbers.length; j++) {
            comparaisonsCounter++;
            if (numbers[j] < numbers[min]) min = j;
          }
          if (min !== i) {
            let temp = numbers[i];
            numbers[i] = numbers[min];
            numbers[min] = temp;
          }
        }
        return `Tri par sélection/Selection sort: ${comparaisonsCounter} comparaisons - [${numbers}]`;
      };  
    console.log(selectionSort(tabData));
    console.log(`----------------------------`)

        break;
    case 3: 
    //Tri par insertion
    const insersionSort = (arr_numbers) => {
        let numbers = [...arr_numbers];
        let comparaisonsCounter = 0;
    
        for (let i = 1; i < numbers.length; i++) {
          x = numbers[i];
          j = i;
          while (j > 0 && numbers[j - 1] > x) {
            comparaisonsCounter++;
            numbers[j] = numbers[j - 1];
            j -= 1;
          }
          numbers[j] = x;
        }
        return `Tri par insertion/Insertion sort: ${comparaisonsCounter} comparaisons - [${numbers}]`;
      };
      console.log(insersionSort(tabData));
      console.log(`----------------------------`)
      break;

        case 4:
            //tri par quickSort
            const quickSort = (arr_numbers) => {
                let counter = 0;
                let numbers = [...arr_numbers];
            
                const sort = (numbers) => {
                  if (numbers.length <= 1) return numbers;
                  const pivot = numbers[0];
                  let right = [];
                  let left = [];
            
                  for (let i = 1; i < numbers.length; i++) {
                    counter++;
                    numbers[i] < pivot ? left.push(numbers[i]) : right.push(numbers[i]);
                  }
                  return sort(left, counter).concat(pivot, sort(right, counter));
                };
            
                numbers = sort(numbers);
                return `Tri rapide/QuickSort: ${counter} comparaisons [${numbers}]`;
              };
            console.log(quickSort(tabData));
            console.log("Beaucoup trop compliqué quand t'as pas fait des études de mathématique appliqué !!");
            console.log(`----------------------------`)            
            break;
        case 5:
            //Tri par merge sort
            const mergeSort = (arr_numbers) => {
                let counter = 0;
                let numbers = [...arr_numbers];
                let half;
            
                const merger = (left, right) => {
                  let arr = [];
                  while (left.length && right.length) {
                    if (left[0] < right[0]) {
                      arr.push(left.shift()); // remove from the left part and push into the sorted array
                    } else {
                      arr.push(right.shift()); // remove from the right part and push into the sorted array
                    }
                  }
                  return [...arr, ...left, ...right];
                };
            
                const mergeSortSplit = (numbers, half = numbers.length / 2) => {
                  counter++;
                  if (numbers.length < 2) return numbers;
                  let left = numbers.splice(0, half); //left part of numbers
                  return merger(mergeSortSplit(left), mergeSortSplit(numbers));
                };
            
                numbers = mergeSortSplit(arr_numbers, half);
                return `Tri fusion/Merge Sort: ${counter} comparaisons [${numbers}]`;
              };
            
            console.log(mergeSort(tabData));           
            console.log("OMFG !");
            console.log(`----------------------------`)
            break;

            case 6: 
            //1
            const bubbleSort1 = (arr_numbers) => {
              let numbers = [...arr_numbers];
              let comparaisonsCounter = 0;
              for (let i = 0; i < numbers.length; i++) {
                for (let j = 1; j < numbers.length - i; j++) {
                  comparaisonsCounter++;
                  if (numbers[j - 1] > numbers[j]) {
                    [numbers[j - 1], numbers[j]] = [numbers[j], numbers[j - 1]];
                  }
                }
              }
              return `Tri à bulle/Bubble Sort: ${comparaisonsCounter} comparaisons - [${numbers}]`;
            };
            console.log(bubbleSort1(tabData));
            console.log(`----------------------------`)

            //2
            const selectionSort1 = (arr_numbers) => {
              let numbers = [...arr_numbers];
              let comparaisonsCounter = 0;
          
              for (let i = 0; i < numbers.length - 1; i++) {
                min = i;
                for (let j = i + 1; j < numbers.length; j++) {
                  comparaisonsCounter++;
                  if (numbers[j] < numbers[min]) min = j;
                }
                if (min !== i) {
                  let temp = numbers[i];
                  numbers[i] = numbers[min];
                  numbers[min] = temp;
                }
              }
              return `Tri par sélection/Selection sort: ${comparaisonsCounter} comparaisons - [${numbers}]`;
            };  
          console.log(selectionSort1(tabData));
          console.log(`----------------------------`)
          //3
          const insersionSort1 = (arr_numbers) => {
            let numbers = [...arr_numbers];
            let comparaisonsCounter = 0;
        
            for (let i = 1; i < numbers.length; i++) {
              x = numbers[i];
              j = i;
              while (j > 0 && numbers[j - 1] > x) {
                comparaisonsCounter++;
                numbers[j] = numbers[j - 1];
                j -= 1;
              }
              numbers[j] = x;
            }
            return `Tri par insertion/Insertion sort: ${comparaisonsCounter} comparaisons - [${numbers}]`;
          };
          console.log(insersionSort1(tabData));
          console.log(`----------------------------`)

          //4
          const quickSort1 = (arr_numbers) => {
            let counter = 0;
            let numbers = [...arr_numbers];
        
            const sort = (numbers) => {
              if (numbers.length <= 1) return numbers;
              const pivot = numbers[0];
              let right = [];
              let left = [];
        
              for (let i = 1; i < numbers.length; i++) {
                counter++;
                numbers[i] < pivot ? left.push(numbers[i]) : right.push(numbers[i]);
              }
              return sort(left, counter).concat(pivot, sort(right, counter));
            };
        
            numbers = sort(numbers);
            return `Tri rapide/QuickSort: ${counter} comparaisons [${numbers}]`;
          };
        console.log(quickSort1(tabData));
        console.log(`----------------------------`)
        //5
        const mergeSort1 = (arr_numbers) => {
          let counter = 0;
          let numbers = [...arr_numbers];
          let half;
      
          const merger = (left, right) => {
            let arr = [];
            while (left.length && right.length) {
              if (left[0] < right[0]) {
                arr.push(left.shift()); // remove from the left part and push into the sorted array
              } else {
                arr.push(right.shift()); // remove from the right part and push into the sorted array
              }
            }
            return [...arr, ...left, ...right];
          };
      
          const mergeSortSplit = (numbers, half = numbers.length / 2) => {
            counter++;
            if (numbers.length < 2) return numbers;
            let left = numbers.splice(0, half); //left part of numbers
            return merger(mergeSortSplit(left), mergeSortSplit(numbers));
          };
      
          numbers = mergeSortSplit(arr_numbers, half);
          return `Tri fusion/Merge Sort: ${counter} comparaisons [${numbers}]`;
        };      
      console.log(mergeSort1(tabData));  
      console.log(`----------------------------`)
          break;

        case 0:
            console.log("Toi aussi t'a rien compris parce que t'es pas un mathématicien !");
            console.log(`----------------------------`)
            console.log(`-----------Alex.H-----------`)
            console.log(`------------2023------------`)
            console.log(`-----------*T.H.P*----------`)
            console.log(`----------------------------`)

            break;

    default:
        console.log("Mets une chiffre du menu !!");
        break;
}