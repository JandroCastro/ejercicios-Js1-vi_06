// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// const prueba1 = [1,2,3,1]
// Output: [1,1,1,3,3,4,3,2,4,2]
// Example 2:

// Input: 
// const prueba2 = false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true



/**
 *  Esta es la primera forma de resolverlo. Pasos a continuación:
 */

const duplicates = (array) => {

    //Creamos array auxiliar para almacenar números

    let auxArr = [];

    //Recorremos el array que nos dan como dato
    for (let i = 0; i < array.length; i++) {
        
        // Si el elemento del array-dato ya está en el array auxiliar,
        //devolvemos true, porque quiere decir que está duplicado

        if(auxArr.indexOf(array[i] !== -1)){
            return true
        }

        //si el elemento del array-dato no está todavía en el array auxiliar,
        // quiere decir que es el primero de su valor numérico y lo metemos dentro
        else {
            auxArr.push(array[i])
        }
       
    }
    //una vez recorrido todo el array-dato, si no se da el caso de que cumpla el if
    // (ya se encuentre un elemento de igual valor numérico en el array auxiliar)
    //se devuelve false porque quiere decir que ningún número está duplicado
    return false
}

console.log(duplicates(prueba2));



//Segunda forma de resolverlo

const segundaForma = (array) => {

    //Filtramos el array-dato de forma que nos quedamos solamente con los datos
    //que aparecen una vez. (Los elementos que sean iguales su posición en el array-dato
    //con lo que devuelva el indexOf).
    //Recordad que el indexOf devuelve la posición DEL PRIMER elemento si hay varios iguales
    let result = array.filter (( item, index ) =>  array.indexOf(item) === index)
    console.log(result)

    //Después simplemente tenemos que comparar las longitudes del array-dato con el array resultante
    //después de hacer el filter. Si algún elemento se repite, se recortará la longitud del array filtrado

    if (array.length === result.length) {
        return false;
    } else if (array.length !== result.length) {
        return true;
    }
}

segundaForma(prueba3)

