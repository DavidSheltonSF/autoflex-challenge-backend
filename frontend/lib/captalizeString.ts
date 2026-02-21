function captalizeWord(word: string): string {
  const chars = word.split('');
  let modified = chars[0].toUpperCase();
  modified += chars.slice(1).join('');
  return modified;
}

export function captalizeString(str: string): string {
  if (str.trim() === '') return '';
  const words = str.split(' ');
  const modifiedWords = words.map((word) => captalizeWord(word));
  return modifiedWords.join(' ');
}
