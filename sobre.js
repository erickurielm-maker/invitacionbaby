const escena = document.getElementById('escena');
const musica = document.getElementById('musicaFondo');
let abierto = false;

escena.addEventListener('click', () => {
  if (abierto) return;
  abierto = true;

  musica.play().catch(error => console.log("Audio bloqueado"));
  localStorage.setItem('musicaActiva', 'true');
  
  escena.classList.add('abierto');

  setTimeout(() => {
    window.location.href = 'invitacion.html';
  }, 1800);
});