function toSentenceCaseWithDot(input) {
  const sentences = input.split(/([.?!] )/);

  const replaced = sentences
    .map(sentence => sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase())
    .join('');

  return replaced.endsWith('.') ? replaced : `${replaced}.`;
}

export default toSentenceCaseWithDot;
