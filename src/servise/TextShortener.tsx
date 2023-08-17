export default function TextShortener(text: string) {
  const maxLength = 150;
  let length = 0;
  const textShort = text.replace(/(\r\n|\n|\r)/gm, '')
    .trim()
    .replace('  ', ' ')
    .split(' ')
    .map(word => {
      if (length < maxLength) {
        length += word.length + 1;
        return word;
      } else {
        return '';
      }
    })
    .join(' ');
  return textShort;
}