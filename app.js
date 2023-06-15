import { getPokemonByName, getPokemonPicture, getPokemonHp, getPokemonAttack, getPokemonDefense}  from './pokemon-api/api.js'


  // document is an object in javaScript provided by the browser's Document Object Model (DOM) API. 
  // It represents the web page as an object, allowing you to access 
  // and manipulate the elements and content of the HTML document.
document.getElementById('searchPokemon').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    // querySelector is a method provided by the Document object in the browser's JavaScript API. 
    // It allows you to select an element from the DOM (Document Object Model) based on a CSS selector.
    // Get the search input value
    const searchInput = document.querySelector('input[name="name"]');
    const searchTerm = searchInput.value;
  
    const picture = await getPokemonPicture(searchTerm);
    const health = await getPokemonHp(searchTerm);
    const attack = await getPokemonAttack(searchTerm);
    const defense = await getPokemonDefense(searchTerm);

    // Get the specified elements
    const windowDiv = document.getElementById('window');
    
    const fillerDivs = document.querySelectorAll('.filler');

  
    fillerDivs.forEach((fillerDiv) => {
      const statContainer = fillerDiv.closest('.stat-container');
      const statName = statContainer.querySelector('p').textContent;
      console.log(statName);
      const statValue = statContainer.querySelector('.stat');
      
      if(statName === 'health') {
        statValue.textContent = health;
        fillerDiv.style.width = `${health}.px`;
      } else if (statName === 'attack') {
        statValue.textContent = attack;
        fillerDiv.style.width = `${attack}.px`;
      } else if (statName === 'defense') {
        statValue.textContent = defense;
        fillerDiv.style.width = `${defense}.px`;
      }
    });


    // built-in JavaScript method that allows you to create an HTML element dynamically
    // Create an image element
    const image = document.createElement('img');
    image.src = picture;

    // used to add a class to the image allowing CSS to manipulate the image
    image.classList.add('pokemon-image');
  
    // Clear the contents of the "window" div
    windowDiv.innerHTML = '';

    // Append the image to the "window" div of the DOM (Document Object Model) to make it visible on the webpage.
    // browser will automatically load and display the image specified in the src attribute
    windowDiv.appendChild(image);

  });


  