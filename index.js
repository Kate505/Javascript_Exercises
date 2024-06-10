function findLongestWords(words) {
  let currentWordLength = 0;
  let longestWords = [];

  for (const word of words) {
    const length = word.length;
    if (length > currentWordLength) {
      currentWordLength = length;
      longestWords = [word];
    } else if (length === currentWordLength) {
      if (!longestWords.includes(word)) {
        longestWords.push(word);
      }
    }
  }

  return longestWords.join(", ");
}

const wordCounter = (text) => {

  let count = {
    words: 0,
    characters: 0,
    sentences: 0,
    longestWord: [],
    averageWordLength: 0
  };

  count.characters = (text.match(/[a-záéíóúüñ]/gi) || []).length;
  count.words = (text.match(/[a-zA-ZÀ-ÿ]+(?:'[a-z]+)?/gi) || []).length;
  count.sentences = (text.match(/[^.!?]+[.!?]*(?=\s|$|[^a-zA-ZÀ-ÿ])/g) || []).length;
  count.averageWordLength = count.characters / count.words;
  count.longestWord = findLongestWords(text.match(/[a-zA-ZÀ-ÿ]+(?:'[a-z]+)?/gi) || []);

  return count;
}

const btnClick = () => {
  const text = document.getElementById('text').value;
  const count = wordCounter(text);

  document.getElementById('words-count').textContent = count.words;
  document.getElementById('average-word-size').textContent = count.averageWordLength > 0 ? count.averageWordLength.toFixed(2) : '0';
  document.getElementById('sentences-count').textContent = count.sentences;
  document.getElementById('longest-word').textContent = count.longestWord.length > 0 ? count.longestWord : 'None';
}

const btnClean = () => {
  document.getElementById('text').textContent = '';
  document.getElementById('words-count').textContent = '0';
  document.getElementById('average-word-size').textContent = '0';
  document.getElementById('sentences-count').textContent = '0';
  document.getElementById('longest-word').textContent = 'None';
}
