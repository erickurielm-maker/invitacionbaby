const fechaEvento = new Date('2026-12-13T16:00:00').getTime();

function actualizarCountdown() {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) return;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = String(horas).padStart(2, '0');
  document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
  document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

actualizarCountdown();
setInterval(actualizarCountdown, 1000);

const musica = document.getElementById('musicaFondo');
if (localStorage.getItem('musicaActiva') === 'true') {
  musica.play().catch(e => console.log("Interacción requerida para el audio"));
}

const btnConfirmar = document.getElementById('btn-confirmar');

btnConfirmar.addEventListener('click', () => {
  const telefono = "522461961429"; 
  const mensaje = encodeURIComponent("¡Hola! Confirmo mi asistencia al Baby Shower de Zaid Mateo. 🎉");
  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, '_blank');
});