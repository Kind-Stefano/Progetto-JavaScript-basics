document.addEventListener("DOMContentLoaded", () => {
  let count = 0;

  const counterElement = document.getElementById('counter');
  const incrementButton = document.getElementById('bottone1');
  const decrementButton = document.getElementById('bottone2');

  function updateCounter() {
      counterElement.innerText = count;
  }

  incrementButton.addEventListener('click', () => {
      count++;
      updateCounter();
  });

  decrementButton.addEventListener('click', () => {
      count--;
      updateCounter();
  });
});