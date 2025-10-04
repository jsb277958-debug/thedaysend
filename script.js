document.querySelectorAll('.deer').forEach(deer => {
  deer.addEventListener('click', () => {
    const clue = deer.dataset.clue;
    window.location.href = clue; // redirects to hidden clue page
  });
});
