/*
 * Crea un algoritmo que analice texto y obtenga:
 * - Número total de palabras.
 * - Longitud media de las palabras.
 * - Número de oraciones del texto (cada vez que aparecen un punto).
 * - Encuentre la o las palabras más largas.
 *
 * Todo esto utilizando un único bucle.
 */

const wordCounter = (text) => {

  let count = {
    words: 0,
    characters: 0,
    sentences: 0,
    currentWordLength: 0,
    longestWord: '',
    averageWordLength: 0
  };

  let i = 0;

  let espacios = text.match(/\s/g);
  let counter1 = espacios ? espacios.length : 0;
  console.log(counter1);

  let caracteres = text.match(/\S/g);
  let counter2 = caracteres ? caracteres.length : 0;
  console.log(counter2);

  let symbols = text.match(/\W/g);
  let counter3 = symbols ? symbols.length : 0;
  console.log(counter3);

  while (i <= text.length) {

    console.log('Hay espacios: ', /\s/g.test(text[i]));
    if ((text[i] === ' ' && text[i] !== '.') || (i === text.length && text[i] !== '.')) {
      i !== text.length ? count.words += 1 : count.words += 1;

      if (count.currentWordLength > count.longestWord.length) {
        if (i === text.length && text[i - 1] === '.') {
          count.longestWord = text.slice(i - count.currentWordLength - 1, i - 1);
        } else {
          count.longestWord = text.slice(i - count.currentWordLength, i);
        }
      }
      count.currentWordLength = 0;
    }

    if (text[i] === '.') {
      count.sentences += 1;
    }

    if (text[i] !== ' ' && text[i] !== '.' && i !== text.length) {
      count.characters += 1;
      count.currentWordLength += 1;
    }
    i++;
  }

  count.words = text.length > 0 ? count.words : 0;
  count.averageWordLength = text.length > 0 ? count.characters / count.words : 0;

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
