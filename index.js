/*
 * Crea un algoritmo que analice texto y obtenga:
 * - Número total de palabras.
 * - Longitud media de las palabras.
 * - Número de oraciones del texto (cada vez que aparecen un punto).
 * - Encuentre la palabra más larga.
 *
 * Todo esto utilizando un único bucle.
 */

const wordCounter = (text) => {

  let count = {
    words: 0,
    characters: 0,
    sentences: 0,
    currentWordLength: 0,
    longestWord: [],
    longestWordLength: 0,
    averageWordLength: 0
  };

  text.split('').forEach(t => {
    /\s/.test(t) === true ? count.words += 1 : 0;
    /[A-Za-zÁÉÍÓÚáéíóúüÜÑñ]/.test(t) === true ? count.characters += 1 : 0;
  })

  console.log('Palabras: ', count.words);
  console.log('Characters: ', count.characters);

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
