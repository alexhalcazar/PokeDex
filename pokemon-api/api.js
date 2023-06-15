// using the CommonJS require syntax, which is typically used in Node.js environments, 
// but it won't work in the browser.

const getPokemonByName = async (name) => {
    try {

        const searchUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

        // fetch function is a built-in browser API that allows you to make HTTP requests.
        const response = await fetch(searchUrl);

        if (!response.ok) {
        throw new Error('Request failed');
    }

        const data = await response.json();
        
        // return data.sprites.front_default;
        return data;
    } catch (error) {
        console.log(error)
    }
}

const getPokemonPicture = async (name) => {
    const pokemon = await getPokemonByName(name);
    const sprite = pokemon.sprites.front_default;

    return sprite;
    
}

const getPokemonHp = async (name) => {
    const pokemon = await getPokemonByName(name);
    const attack = pokemon.stats[0].base_stat;
    return attack;
}

const getPokemonAttack = async (name) => {
    const pokemon = await getPokemonByName(name);
    const attack = pokemon.stats[1].base_stat;
    return attack;
}

const getPokemonDefense = async (name) => {
    const pokemon = await getPokemonByName(name);
    const attack = pokemon.stats[2].base_stat;
    return attack;
}

// Note that I've used the export default syntax instead 
// of module.exports because it's compatible with client-side JavaScript.
// export default getPokemonByName;

// now I have more functions and I don't want to use export default
export {
    getPokemonByName,
    getPokemonPicture,
    getPokemonHp,
    getPokemonAttack,
    getPokemonDefense
}