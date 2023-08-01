export default function TextShortener(text: string) {
  const maxLength = 260;
  let length = 0;
  const textShort = text.replace(/(\r\n|\n|\r)/gm, '')
    .trim()
    .replace('  ', ' ')
    .split(' ')
    .map(word => {
      //console.log(length);
      //console.log('word length', word.length, ':', word);
      if (length < maxLength) {
        length += word.length + 1;
        //console.log("returned ", word);
        return word;
      } else {
        //console.log('returned ""')
        return '';
      }
    })
    .join(' ');
  //console.log(textShort);
  return textShort;
}