function updateScene() {
  const hour = new Date().getHours();
  const sky = document.getElementById('sky');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const stars = document.getElementById('stars');

  if (hour >= 6 && hour < 18) {
    // Day Mode
    sky.style.background = 'linear-gradient(to bottom, #87ceeb, #fefcea)';
    sun.style.opacity = '1';
    moon.style.opacity = '0';
    stars.style.opacity = '0';
    document.body.style.background = '#87ceeb';
  } else {
    // Night Mode
    sky.style.background = 'linear-gradient(to bottom, #020111, #191970)';
    sun.style.opacity = '0';
    moon.style.opacity = '1';
    stars.style.opacity = '1';
    document.body.style.background = '#0b0c1b';
    createStars();
  }
}

// Clock
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const time = now.toLocaleTimeString();
  clock.textContent = time;
}

// Stars Generator
function createStars() {
  const stars = document.getElementById('stars');
  stars.innerHTML = '';
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.opacity = Math.random();
    stars.appendChild(star);
  }
}

// Update every second
setInterval(() => {
  updateClock();
  updateScene();
}, 1000);

updateScene();
updateClock();
