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

// change background color
const changeBackgroundColor = () => {
  const newBackgroundColor = getBackgroundColor();
  document.querySelector('body').style.backgroundColor = newBackgroundColor;
}

// function to print quotes and change background color
const render = () => {
  printQuote();
  changeBackgroundColor();
}

// event handler to change quote
document.getElementById('loadQuote').addEventListener("click", render, false);