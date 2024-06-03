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
  const count = {

  };
  let textLenght = text.length;
  console.log('Longitud Media de las palabras: ', textLenght)
  let countWordsCharacters = 0;
  let countWords = 0;
  let countSentences = 0;
  let currentWordLength = 0;
  let promWordLength = 0;
  let longerWord = '';

  for (let i = 0; i < textLenght; i++) {
    if (text[i] === ' ') {
      countWords += 1;
    }

    if(text[i] === '.'){
      countSentences += 1;
    }

    if(text[i] !== ' ' && text[i] === '.') {
      countWordsCharacters += 1;
      currentWordLength += 1;
    }
  }

  console.log('Total de Palabras: ', countWords);
  console.log('Longitud Media de las palabras: ', promWordLength);
  console.log('Total de Oraciones: ', countSentences);
  console.log('Palabra más larga: ', longerWord);

}

wordCounter('Hola Mundo');