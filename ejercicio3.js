// Given an integer array arr, return true if 
// there are three consecutive odd numbers in the array. 
// Otherwise, return false.
 

// Example 1:

const arr1 = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.
// Example 2:

const arr2 = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.



//Función auxiliar que devuelve True si un numero es impar

const isOdd = number =>  number % 2  !== 0;

const threeConsecutiveOdds = array => {

    //Creamos array auxiliar

    let auxArr = [];

    //Recorremos cada número del array-dato. Dos opciones en cuanto a sintaxis:
    //1ª sin función auxiliar
    //2ª con función auxiliar
    //En ambos casos hay dos opciones: 
    //-Si el número es impar, lo añadimos al array auxiliar. En el momento que este array tenga
    //longitud tres, la función devuelve True porque...
    //-Si el número no es impar (no se sigue la sucesión de impares), por lo tanto volvemos 
    //a "resetear" el array auxiliar, vaciándolo

    for (const number of array) {

        if (number % 2  !== 0) {

            auxArr.push(number);
            if (auxArr.length === 3) {
                return true
            }  
        }
        else{
            auxArr= []; 
        }
        
    }

    //Si en ningún momento el auxiliar llega a tener una longitud de tres, quiere decir que no hay
    //tres impares consecutivos, por lo que se devuelve false
    return false


}


//En esta forma simplemente recorremos el array, y en el momento que un número sea impar, y el siguiente (i+1)
// y el siguiente también(i+2), tenemos tres números consecutivos impares y devuelve true

const segundaForma = array => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2  !== 0 && isOdd(array[ i+1 ]) && array[ i+2 ] % 2  !== 0 ) {
            return true
        }
    }

    //Si esto no se cumple devuelve false
    return false


}





console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))
console.log(segundaForma([1,2,34,3,4,5,7,23,12]))

