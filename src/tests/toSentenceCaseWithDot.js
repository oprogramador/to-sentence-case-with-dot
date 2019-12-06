import toSentenceCaseWithDot from 'to-sentence-case-with-dot/toSentenceCaseWithDot';
import expect from 'to-sentence-case-with-dot/tests/expect';

describe('toSentenceCaseWithDot', () => {
  it('converts first letter to upper case and other letters to lower case - single sentence', () => {
    const input = 'loREm IPsum DOLOR sit ameT.';

    const result = toSentenceCaseWithDot(input);

    expect(result).to.equal('Lorem ipsum dolor sit amet.');
  });

  it('converts multiple sentences', () => {
    const input = 'loREm IPsum DOLOR sit ameT. consectetur Adipiscing elit. sed DO eiusmod tempor incididunt.';

    const result = toSentenceCaseWithDot(input);

    expect(result).to.equal('Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt.');
  });
});
