/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreelancer() {
  const nameIndex = Math.floor(Math.random() * NAMES.length);
  const occupationIndex = Math.floor(Math.random() * OCCUPATIONS.length);

  const name = NAMES[nameIndex];
  const occupation = OCCUPATIONS[occupationIndex];
  const rate = Math.round((Math.random() * 180 + 20) * 100) / 100;

  return { name, occupation, rate };
}

const freeLancer = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
console.log(freeLancer);
