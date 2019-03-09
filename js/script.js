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
const backgroundColors = ['red', 'blue', 'orange', 'green', 'purple', 'gray'];

// create getRandomQuote function
const getRandomQuote = () => {
  let numberOfQuotes = quotes.length;
  let randomNumber = Math.floor(Math.random() * numberOfQuotes);
  return quotes[randomNumber];
}

// generate random background color
const getBackgroundColor = () => {
  let numberOfColors = backgroundColors.length;
  let randomNumber = Math.floor(Math.random() * numberOfColors);
  return backgroundColors[randomNumber];
}

// function to change backgroundColor
const changeBackgroundColor = () => {
  const newBackgroundColor = getBackgroundColor();
  document.querySelector('body').style.backgroundColor = newBackgroundColor;
}

// create printQuote function
const printQuote = () => {
  // get random quote
  const quote = getRandomQuote();

  // build html string
  let htmlString = '<p class="quote">' + quote.quote + '</p>';
  htmlString += '<p class="source">' + quote.source;
  
  // add the citation if citation property exists
  if (quote.citation) {
    htmlString += '<span class="citation">' + quote.source + '</span>';
  }

  // add the year if year property exists
  if (quote.year) {
    htmlString += '<span class="year">' + quote.year + '</span>';
  }

  // complete html string
  htmlString += '</p>';
  
  // change background color
  changeBackgroundColor();

  // change quotes
  document.querySelector('#quote-box').innerHTML = htmlString;
}

// event handler to change quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);