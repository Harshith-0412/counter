const counter = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const incrementValueInput = document.getElementById('incrementValue');
const resetButton = document.getElementById('reset');

let count = 0;

function updateCounter() {
  counter.textContent = count;
  counter.value = incrementValue;
}
// incrementButton.addEventListener('click', () => {
//   count++;
//   updateCounter();
// });
incrementButton.addEventListener('click', () => {
  const incrementValue = parseInt(incrementValueInput.value) || 1;
  count += incrementValue;
  updateCounter();
});


// decrementButton.addEventListener('click', () => {
//   if (count > 0) {
//     count--;
//     updateCounter();
//   }
// });

decrementButton.addEventListener('click', () => {
  const incrementValue = parseInt(incrementValueInput.value) || 1;
  count -= incrementValue;
  updateCounter();
});

resetButton.addEventListener('click', () => {
  count = 0;
  incrementValueInput.value='';
  updateCounter();
});


