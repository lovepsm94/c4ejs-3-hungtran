//bai 7:
const quote = document.getElementsByTagName('div')[0];
const author = document.getElementsByTagName('span')[0];
async function showQuotes() {
    response = await fetch('http://quotes.rest/qod.json');
    data = await response.json();
    console.log(data);
    quote.textContent = data.contents.quotes[0].quote;
    author.textContent = data.contents.quotes[0].author;
} 
showQuotes();


