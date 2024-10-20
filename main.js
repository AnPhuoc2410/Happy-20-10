onload = () => {
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
    textElement.style.transition = 'opacity 3s ease-in-out';
}
document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('happy-2010-music');
  
  music.play().then(() => {
      music.muted = false;  
      music.volume = 0.5; 
  }).catch((error) => {
      console.error('Autoplay failed:', error);
  });
});
