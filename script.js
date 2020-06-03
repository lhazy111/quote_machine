
let quotes_arr = [];
let quotes_number = 0;
let quote_box = document.getElementById('quote-box');
let quote_text = document.getElementById('text');
let author = document.getElementById('author');
let new_button = document.getElementById('new-quote');
let tweet_button = document.getElementById('tweet-quote');
fetch('https://quote-garden.herokuapp.com/api/v2/quotes?page=2&limit=1000')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        quotes_arr = data.quotes;
        quotes_number = quotes_arr.length;
        console.log(quotes_arr[0].quoteText);
        new_quote()
    });

new_button.addEventListener('click', new_quote);
tweet_button.addEventListener('click', tweet_quote);

function new_quote() {
    quote_box.classList.add("fade-in");
    let index = random_number(quotes_number);
    console.log('index', index, quotes_arr[index]);
    quote_box.style.transition
    quote_text.innerHTML = '<i class="fas fa-quote-left fa-2x mr-3"></i>' + quotes_arr[index].quoteText;
    author.innerHTML = quotes_arr[index].quoteAuthor;
    setTimeout(function () { quote_box.classList.remove("fade-in"); }, 1000);

}

function tweet_quote() {
    console.log('current quote:', quote_text.innerText, 'by', author.innerText);
    tweet_button.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes=' + ('"' + quote_text.innerText + '" ' + author.innerText));
}

//--------------------helpers-------------------------------
function random_number(num) {
    return Math.floor(Math.random() * num)
}



