//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let result = true;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  [...alphabet].forEach((letter) => {
    const isInSentence = sentence.toLowerCase().includes(letter);

    if (!isInSentence) {
      result = false;
    }
  });

  return result;
};
