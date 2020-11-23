
// Imagine you are building a compiler. 
// Before running any code, the compiler must check that 
// the parentheses in the program are balanced. 
// Every opening bracket must have a corresponding closing bracket. 
// We can approximate this using strings.

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

// Open brackets are closed by the same type of brackets.
// Open brackets are closed in the correct order.
// Note that an empty string is also considered valid.
// Example1:
const prueba1 = "((())"
// Output: True

// Example2:
const prueba2= "[()]{}"
// Output: True

// Example3:
const prueba3= "({[)]"
// Output: False


//Función auxiliar que devuelve true si el caracter es de apertura

const isOpen = string =>  ['(', '[', '{'].includes(string);

//Función auxiliar que nos devuelve true si un carácter es el de cierre
//correspondiente a cada uno de entrada

const closes = (characterA, characterB) =>   {
    let parejas = {'(' : ')', '[':']' , '{':'}'};
    return parejas[characterA] === characterB
}



const correctString = (str) => {

    //https://www.youtube.com/watch?v=jIlB1D8e4rk&t=891s  => enlace a video de youtube que
    //explica bastante mejor que yo el sistema de pila para solucionar ejercicios. No os liéis con su forma de 
    //resolverlo porque usa conceptos un poco avanzados y lenguaje TypeScript

    //creamos pila y la inicializamos vacía

    let pila = [];

    //Hacemos un array con el string mediante el método string
    const stringEnArray = str.split('');

    //Recorremos todos los caracteres del array que hemos creado

    for (const character of stringEnArray) {
        console.log(character)

        //Si es de apertura, lo añadimos a la pila

        if (isOpen(character)) {
            pila.push(character)
            console.log(pila)
        }

        //Si no es de apertura hacemos lo siguiente
        else {

            //Extraemos el elemento superior de la pila (el último añadido y por tanto el primero que debe cerrarse).
            //Recordad que el método pop EXTRAE el último elemento, es decir, recorta el array en una unidad de longitud
            let topStackCharacter = pila.pop();

            //Si el superior de la pila no "hace pareja" con el caracter que toca,
            // automáticamente devolvemos false y se acaba la funcion

            if(!closes(topStackCharacter, character)){
                return false
            }
        }   
    }

    //por último, debemos ver si no queda ningún elemento en la pila que haya quedado sin cerrar (sin su pareja)
    return pila.length === 0;
}



correctString(prueba1)
