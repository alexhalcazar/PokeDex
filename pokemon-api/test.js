const api = require('./api.js')

const getPokemon = async (args) => {
    try {
        const pic = await api.getPokemonByName(args);
        console.log(pic);
    } catch (error) {
        console.log(error);
    }
}


getPokemon('charmander');