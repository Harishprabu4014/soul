// Generate butterflies
for (let i = 0; i < 4; i++) {
  let b = document.createElement("img");
  b.src = "https://i.ibb.co/9WX1M5h/butterfly.png"; // butterfly image
  b.classList.add("butterfly");
  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDelay = Math.random() * 10 + "s";
  document.getElementById("butterflies").appendChild(b);
}

// Generate petals
for (let i = 0; i < 15; i++) {
  let p = document.createElement("div");
  p.classList.add("petal");
  p.style.left = Math.random() * 100 + "vw";
  p.style.background = `hsl(${Math.random()*60+330},70%,80%)`;
  p.style.animationDuration = (Math.random()*5+5) + "s";
  p.style.animationDelay = Math.random()*5 + "s";
  document.getElementById("petals").appendChild(p);
}

// Floating hearts generator
function createHeart() {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (Math.random()*2+3) + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 500);

// Button response
function respond(answer) {
  let result = document.getElementById("result");
  if (answer === "yes") {
    result.innerHTML = "💖 You just made my world brighter! 'Every love story is beautiful, but ours will be my favorite forever.' 🌹";
  } else {
    result.innerHTML = "🌸 You’re still the most precious person to me. 'Even if the answer is no, you’ll always be my beautiful chapter.' 💫";
  }
}
