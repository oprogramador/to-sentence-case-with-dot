# to-sentence-case-with-dot

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oprogramador/to-sentence-case-with-dot.svg?branch=master)](https://travis-ci.org/oprogramador/to-sentence-case-with-dot
)

[![NPM status](https://nodei.co/npm/to-sentence-case-with-dot.png?downloads=true&stars=true)](https://npmjs.org/package/to-sentence-case-with-dot
)

A JavaScript library which, for each sentence, transforms the first letter to upper case and other letters to lower case.

It appends a dot at the end if not added before.

It recognizes dot `.`, question mark `?` and exclamation mark `!` as characters ending a sentence.

After the character ending a given sentence, there must be a space.

## install
`npm install --save to-sentence-case-with-dot`
or
`yarn add to-sentence-case-with-dot`

## usage
```js
const toSentenceCaseWithDot = require('to-sentence-case-with-dot').default;

const input = 'loREm IPsum DOLOR sit ameT. consectetur! Adipiscing elit? sed DO eiusmod tempor incididunt';
const result = toSentenceCaseWithDot(input);
expect(result).to.equal('Lorem ipsum dolor sit amet. Consectetur! Adipiscing elit? Sed do eiusmod tempor incididunt.');
```

In order to see more details, see [tests](https://github.com/oprogramador/to-sentence-case-with-dot/blob/master/src/tests/toSentenceCaseWithDot.js).
