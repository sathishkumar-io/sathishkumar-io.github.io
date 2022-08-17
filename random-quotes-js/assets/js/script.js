const quotes = document.querySelector('.quotes');
const author = document.querySelector('.author');
const generate = document.querySelector('.generate-btn');

const randomQuotes = [
    {
        quote: 'Nothing is impossible, the word itself says “Im possible”!',
        author: "Audrey Hepburn"
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    },
    {
        quote: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford"
    },
    {
        quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        author: "Vince Lombardi"
    },
    {
        quote: "Life is 10 percent what happens to me and 90 percent of how I react to it.",
        author: "Charles Swindoll"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        quote: "None of us is as smart as all of us.",
        author: "Ken Blanchard"
    },
    {
        quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        author: "Jimmy Dean"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "To handle yourself, use your head; to handle others, use your heart.",
        author: "Eleanor Roosevelt"
    },
]

generate.addEventListener('click', ()=> {
    generateQuote();
});

function generateQuote() {
    // Get Random Index Number from total number of quotes
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    // Get Random Quote
    quotes.innerHTML = "“"+randomQuotes[randomIndex].quote+"”";
    // Get Random Quote Author name
    author.innerHTML = "― "+randomQuotes[randomIndex].author;
}