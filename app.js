const startDate = new Date("2023-05-14"); // CHANGE THIS

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("counter").innerText =
    `Together for ${days} days ❤️`;
}

setInterval(updateCounter, 1000);
updateCounter();
