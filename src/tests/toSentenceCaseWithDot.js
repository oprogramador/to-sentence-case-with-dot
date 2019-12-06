/* eslint-disable max-len */
import expect from 'to-sentence-case-with-dot/tests/expect';
import toSentenceCaseWithDot from 'to-sentence-case-with-dot/toSentenceCaseWithDot';

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

  it('recognizes a new sentence only if there is a space after dot', () => {
    const input = 'loREm IPsum DOLOR sit ameT. consectetur Adipiscing elit. sed DO (in the U.S.A and the E.U.) eiusmod tempor incididunt.';

    const result = toSentenceCaseWithDot(input);

    expect(result).to.equal('Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do (in the u.s.a and the e.u.) eiusmod tempor incididunt.');
  });
});
