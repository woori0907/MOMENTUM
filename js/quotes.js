const quotes = [
    {
        quote: "Those who cannot remember the past are condemned to repeat it.",
        author: "George Santayana",
    },
    {
        quote: "Whoso neglects learning in his youth, Loses the past and is dead for the future.",
        author: "Euripides",
    },
    {
        quote: "Learning without thought is labor lost; thought without learning is perilous.",
        author: "Confucius",
    },
    {
        quote: "Seeing much, suffering much, and studying much, are the three pillars of learning.",
        author: "Benjamin Disraeli",
    },
    {
        quote: "Education is a progressive discovery of our own ignorance.",
        author: "Will Durant",
    },
    {
        quote: "One repays a teacher badly if one only remains a pupil.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin",
    },
    {
        quote: "The great aim of education is not knowledge but action.",
        author: "Herbert Spencer",
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "Idleness and lack of occupation tend - nay are dragged - towards evil.",
        author: "Hippocrates",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;