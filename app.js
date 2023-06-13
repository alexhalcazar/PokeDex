import getPokemonByName from './pokemon-api/api.js'


document.getElementById('searchPokemon').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission
    
    console.log('submit button clicked!');

    // Get the search input value
    const searchInput = document.querySelector('input[name="name"]');
    const searchTerm = searchInput.value;
  
    const result = await getPokemonByName(searchTerm);

    // Get the "window" div element
    const windowDiv = document.getElementById('window');

    // Create an image element
    const image = document.createElement('img');
    image.src = result;
  
    // Clear the contents of the "window" div
    windowDiv.innerHTML = '';

    // Append the image to the "window" div
    // browser will automatically load and display the image specified in the src attribute
    windowDiv.appendChild(image);

    console.log(result);
  });