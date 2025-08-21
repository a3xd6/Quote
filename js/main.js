var quotes = [
  `<p>"You miss 100% of the shots you don't take."</p><p>--Wayne Gretzy</p>`,
  `<p>"Do not take life too seriously. You will not get out alive."</p><p>--Elbert Hubbard</p>`,
  `<p>"The best revenge is massive success."</p><p>--Frank Sinatra</p>`,
  `<p>"It's not what happens to you, but how you react to it that matters."</p><p>--Epictetus</p>`,
  `<p>"Resentment is like drinking poison and waiting for your enemies to die."</p><p>--Nelson Mandela</p>`,
];

var currentIndex = -1;
function createRandomQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  while (i == currentIndex) {
    i = Math.floor(Math.random() * quotes.length);
  }
  currentIndex = i;
  document.getElementById("quote").innerHTML = quotes[i];
}
