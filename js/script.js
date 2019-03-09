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
    // citation: 'Citation',
    // year: 2015
  },
  {
    quote: 'Quote 4',
    source: 'Source',
    // citation: 'Citation',
    // year: 2004
  },
  {
    quote: 'Quote 5',
    source: 'Source',
    // citation: 'Citation',
    // year: 1999
  }
];

// create getRandomQuote function
const getRandomQuote = () => {
  let numberOfQuotes = quotes.length;
  let randomNumber = Math.floor(Math.random() * numberOfQuotes);
  return quotes[randomNumber];
}

// create printQuote function
const printQuote = () => {
  const quote = getRandomQuote();
  let htmlString = '<p class="quote">' + quote.quote + '</p>';
  htmlString += '<p class="source">' + quote.source;
  if (quote.citation) {
    htmlString += '<span class="citation">' + quote.source + '</span>';
  }
  if (quote.year) {
    htmlString += '<span class="year">' + quote.year + '</span>';
  }
  htmlString += '</p>';
  document.querySelector('#quote-box').innerHTML = htmlString;
}
printQuote();




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.