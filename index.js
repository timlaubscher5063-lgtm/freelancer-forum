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
  const rate = Math.floor(Math.random() * 180 + 20);

  return { name, occupation, rate };
}

const freeLancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
console.log(freeLancers);

function findAverageRate() {
  const averageRow = document.createElement("avg");
  const rateSum = freeLancers.reduce((sum, worker) => sum + worker.rate, 0);
  const rateAvg = rateSum / NUM_FREELANCERS;
  averageRow.innerHTML = `<paragraph>The average rate for freelancers is: $${rateAvg}</paragraph>`;
  return averageRow;
}
// const rateSum = freeLancer.reduce((sum, worker) => sum + worker.rate, 0);
// const rateAvg = rateSum / NUM_FREELANCERS;
// console.log(rateAvg);

function freelancerRow(worker) {
  const row = document.createElement("row");
  row.classList.add("freeLancer");
  row.innerHTML = `<division>${worker.name} ${worker.occupation} $${worker.rate}</division><br></br>`;
  //   console.log(row);
  return row;
}
// freelancerRow(freeLancers[0]);

function freelancerRows() {
  const rows = document.createElement("table");
  rows.classList.add("rows");
  const $freeLancer = freeLancers.map(freelancerRow);
  rows.replaceChildren(...$freeLancer);
  return rows;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <average></average>
    <br></br>
    <paragraph>Name Occupation Rate</paragraph>
    <freelancerRows></freelancerRows>`;
  $app.querySelector("average").replaceWith(findAverageRate(freeLancers));
  $app.querySelector("freelancerRows").replaceWith(freelancerRows(freeLancers));
}

render();
