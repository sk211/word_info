const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = quote => {
    const quoteElemnt = document.getElementById("quote")
    quoteElemnt.innerText = quote.quote
}
