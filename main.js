
let timeLeft = 30;
let currentBid = 1;
const timerEl = document.getElementById("timer");
const bidEl = document.getElementById("current-bid");
const statusEl = document.getElementById("status");

const countdown = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft + "s";
  } else {
    clearInterval(countdown);
    statusEl.textContent = "🏁 Bidding closed! Winning bid: $" + currentBid;
    statusEl.style.color = "green";
  }
}, 1000);

function placeBid() {
  if (timeLeft > 0) {
    currentBid++;
    bidEl.textContent = "Current Bid: $" + currentBid;
  }
}
