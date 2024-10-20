window.onload = () => {
  document.querySelector('.not-loaded').classList.remove('not-loaded');
  showHappyText();
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);
};

function showHappyText() {
  const textElement = document.querySelector('.happy-text');
  textElement.style.opacity = '1';
}
document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('happy-music');
  music.play().then(() => {
      console.log('Music is playing automatically.');
  }).catch(() => {
      console.log('User interaction required to play music');
      // Add a fallback to unmute or start playing when the user interacts with the page.
      document.addEventListener('click', () => {
          music.play();
          console.log('Music started after user interaction.');
      }, { once: true }); // Ensure this event is triggered only once.
  });
  music.volume = 0.5; // Set the volume level.
});
