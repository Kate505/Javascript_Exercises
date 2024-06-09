const wordCounter = (text) => {

  let count = {
    words: 0,
    characters: 0,
    sentences: 0,
    currentWordLength: 0,
    longestWord: [],
    averageWordLength: 0
  };

  count.characters = (text.match(/[a-záéíóúüñ]/gi) || []).length;
  count.words = (text.match(/[a-zA-ZÀ-ÿ]+(?:'[a-z]+)?/gi) || []).length;
  count.sentences = (text.match(/\w[;.?!](\s|$)/g) || []).length;
  count.averageWordLength = count.characters / count.words;

  return count;
}

const btnClick = () => {
  const text = document.getElementById('text').value;
  const count = wordCounter(text);

  document.getElementById('words-count').textContent = count.words;
  document.getElementById('average-word-size').textContent = count.averageWordLength.toFixed(2);
  document.getElementById('sentences-count').textContent = count.sentences;
  document.getElementById('longest-word').textContent = count.longestWord.length > 0 ? count.longestWord : 'None';
}
