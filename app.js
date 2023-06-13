import getPokemonByName from './pokemon-api/api.js'


document.getElementById('searchPokemon').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    // querySelector is a method provided by the Document object in the browser's JavaScript API. 
    // It allows you to select an element from the DOM (Document Object Model) based on a CSS selector.
    // Get the search input value
    const searchInput = document.querySelector('input[name="name"]');
    const searchTerm = searchInput.value;
  
    const result = await getPokemonByName(searchTerm);

    // Get the "window" div element
    const windowDiv = document.getElementById('window');

    // built-in JavaScript method that allows you to create an HTML element dynamically
    // Create an image element
    const image = document.createElement('img');
    image.src = result;
  
    // Clear the contents of the "window" div
    windowDiv.innerHTML = '';

    // Append the image to the "window" div of the DOM (Document Object Model) to make it visible on the webpage.
    // browser will automatically load and display the image specified in the src attribute
    windowDiv.appendChild(image);

    console.log(result);
  });