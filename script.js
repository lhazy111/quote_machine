
let quotes_arr = [];
let quotes_number = 0;
let quote_box = document.getElementById('quote-box');
let quote_text = document.getElementById('text');
let author = document.getElementById('author');
let new_button = document.getElementById('new-quote');
fetch('https://type.fit/api/quotes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data[100].text);
        quotes_arr = data;
        quotes_number = data.length;
        new_quote()
        // quote_text.innerHTML = '<i class="fas fa-quote-left fa-2x mr-3"></i>' + data[random_number(quotes_number)].text;
    });

new_button.addEventListener('click', new_quote);

function new_quote() {
    quote_box.classList.add('fade-out');
    let index = random_number(quotes_number);
    console.log('index', index, quotes_arr[index]);
    quote_text.innerHTML = '<i class="fas fa-quote-left fa-2x mr-3"></i>' + quotes_arr[index].text;
    author.innerHTML = quotes_arr[index].author;


}



//--------------------helpers-------------------------------
function random_number(num) {
    console.log(Math.floor(Math.random() * num))
    return Math.floor(Math.random() * num)
}
function display_quote() {
    quote_text.innerHTML = '<i class="fas fa-quote-left fa-2x mr-3"></i>' + quotes_arr[random_number(quotes_number)].text;

}



