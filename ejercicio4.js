// Try to show all the characters that are human 
// by consuming the Rick and Morty API

// Rick and Morty API:
// https://rickandmortyapi.com/documentation/#rest

const axios = require('axios');

const mortyEsTonto = (async () => {

    try {
        const resultado = await axios.get('https://rickandmortyapi.com/api/character')

        console.log(resultado)

        //Recordad que las consultas a APIs (cuando se resuelven) dan como resultado un objeto con muchos objetos
        //dentro, es cuestión de "bucear" en este objeto (acceder a propiedades, que pueden ser otros objetos o arrays)
        //para llegar a la información que realmente buscamos

        //el array resultados es lo que nos da la información que necesitamos, pero para ello tenemos que acceder a él a través
        // del objeto data que está en resultado

        const humansCharacters = resultado.data.results.filter((cosa) => {
            return cosa.species === 'Human'
            
        })
        console.log(humansCharacters)
        
    } catch (error) {
        console.log(error)
    }
    

    //Recordad que la sintaxis try catch con async-await equivale a las promesas con su .then y su .catch

})()
