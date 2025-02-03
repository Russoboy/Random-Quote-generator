// const randomQuote = document.getElementById('Quote');
// const authorQuote = document.getElementById('Author');
// const generateQuote = document.getElementById('Generate');


// generateQuote.addEventListener('click', () =>{
//   getQuote();
// })

// function getQuote() {
//   const apiKey = ;
//   const apiUrl = `https://api.api-ninjas.com/v1/quotes`;
  
  
//   fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => { {displayQuote(data);}
//   })
//   .catch((error) => {
//       // Handle fetch errors (e.g., network issues)
//       randomQuote.textContent = "Error fetching data. Please check your connection.";
//       randomQuote.style.display = "block"; // Show error
//       randomQuote.style.color = "red"; // Show error
//   })

// };


// function displayQuote(data) {
//     const quote = data.quote;
//     const authorName = data.quote; 

//     randomQuote.innerHTML = `<p id="Quote">${quote}</p>`
//     authorQuote.innerHTML = `<p id="Author">${authorName}</p>`
// }



//================CORRECT VERSION===================

// Select DOM elements
const randomQuote = document.getElementById('Quote');
const authorQuote = document.getElementById('Author');
const qouteCategory = document.getElementById('Category')
const generateQuote = document.getElementById('Generate');

function getQuote() {
  const apiKey = 'tXDIUEhy1/cUebjInb2nTw==atMRIMgz8ytZjlji';  // Replace with your valid API key if needed
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
  
  // Fetch from the API with proper headers
  fetch(apiUrl, {
    headers: { 'X-Api-Key': apiKey }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // The API returns an array; get the first quote object.
      if (data && data.length > 0) {
        displayQuote(data[0]);
      } else {
        randomQuote.textContent = "No quote found.";
        authorQuote.textContent = "";
      }
    })
    .catch((error) => {
      console.error('Error fetching quote:', error);
      randomQuote.textContent = "Error fetching data. Please check your connection.";
      randomQuote.style.color = "red";
      authorQuote.textContent = "";
    });
}

function displayQuote(quoteObject) {
  // Extract quote and author from the quote object.
  const quote = quoteObject.quote;
  const authorName = quoteObject.author;
  const category = quoteObject.category;

  // Update the DOM elements with the new quote and author.
  randomQuote.textContent = quote;
  authorQuote.textContent = authorName;
  qouteCategory.textContent = category;
}

// Add the event listener to the button.
generateQuote.addEventListener('click', getQuote);

// Optionally, fetch a quote when the page first loads.
getQuote();


