const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
// https://type.fit/api/quotes
//Quote Api to double check syntax, its an array of objects rather than single quotes

//get quotes from api
//going to use an asynchronous fetch request within a try catch statement
//an asynchronous function can run at any time independently and it won't stop the browser from completeing the loading of a page
let apiQuotes = [];

//show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

//show new quote
function newQuote() {
  loading();
  //pick a random index number from the api array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  //check if author field is blank and replace with 'unknown'
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  //check the quote lenght to determin the styleing
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //set the quote and hide the loader
  quoteText.textContent = quote.text;
  complete();
}

async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  //a try catch statement allows us to attempt to complete a fetch request, if it doesn't work we can catch the error info and do something with it
  try {
    const response = await fetch(apiUrl);
    //'await' means that this constant will not be populated until it has some data fetched from our API
    // which ifs that by default if we did not do asynchronous (async) and we did not do 'await' it would try to set the response value before it had a chance to fetch and that would cause an error
    apiQuotes = await response.json();
    // we are getting the JSON from our API as a response and then we're turning that response in a JSON object because from a web server it's actually just a series of strings.
    console.log(apiQuotes);
    newQuote();
  } catch (error) {
    console.log(error);
    //catch error here
  }
}

//to tweet a quote
function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  //open out custom twitter url to open in a new tab
  window.open(twitterURL, "_blank");
}

//Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//On load
getQuotes();
