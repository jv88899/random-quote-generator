/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// create quotes object
const quotes = [
  {
    quote: 'Quote 1',
    source: 'Source',
    citation: 'Citation',
    year: 1989
  },
  {
    quote: 'Quote 2',
    source: 'Source',
    citation: 'Citation',
    year: 2001
  },
  {
    quote: 'Quote 3',
    source: 'Source',
    citation: 'Citation',
    year: 2015
  },
  {
    quote: 'Quote 4',
    source: 'Source',
    citation: 'Citation',
    year: 2004
  },
  {
    quote: 'Quote 5',
    source: 'Source',
    citation: 'Citation',
    year: 1999
  }
];

// create getRandomQuote function
const getRandomQuote = () => {
  let numberOfQuotes = quotes.length;
  let randomNumber = Math.floor(Math.random() * numberOfQuotes);
  return quotes[randomNumber];
}
getRandomQuote();



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.