function toSentenceCaseWithDot(input) {
  const sentences = input.split(/([\.?!] )/);

  return sentences
    .map(sentence => sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase())
    .join('');
}

export default toSentenceCaseWithDot;
