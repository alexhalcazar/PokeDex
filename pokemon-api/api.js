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
        return data.sprites.front_default;

    } catch (error) {
        console.log(error)
    }
}

// Note that I've used the export default syntax instead 
// of module.exports because it's compatible with client-side JavaScript.
export default getPokemonByName;