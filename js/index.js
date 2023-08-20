//CONTADOR
const targetDate = new Date('2023-12-01T23:59:59').getTime();

function updateCountdown(){
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      document.getElementById('countdown').innerHTML = '<div class="digit">¡Es hoy!</div>';
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById('days').innerText = formatTime(days);
      document.getElementById('hours').innerText = formatTime(hours);
      document.getElementById('minutes').innerText = formatTime(minutes);
      document.getElementById('seconds').innerText = formatTime(seconds);
    }
}

function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

setInterval(updateCountdown, 1000);

// ANIMATION
function loadRingAnimation() {
  const animationContainer = document.getElementById('animation-container');
  const baseURL = window.location.href;

  const animation = bodymovin.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: baseURL + './lottie/ring.json',
  });
}

loadRingAnimation();

function loadDressAnimation(){
  const dressAnimationContainer = document.getElementById("dress-animation");
  const baseURL = window.location.href;

  const animation = bodymovin.loadAnimation({
    container: dressAnimationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: baseURL + './lottie/dresscode.json',
  });
}

loadDressAnimation();

function loadNotesAnimation(){
  const notesAnimationContainer = document.getElementById("notes-animation");
  const baseURL = window.location.href;

  const animation = bodymovin.loadAnimation({
    container: notesAnimationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: baseURL + './lottie/notes.json',
  });
}

loadNotesAnimation();

function loadAnimationGift(){
  const animationGiftContainer = document.getElementById('animation-gift-container');
  const baseURL = window.location.href;

  const animation = bodymovin.loadAnimation({
    container: animationGiftContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: baseURL + './lottie/gift.json',
  });
}

loadAnimationGift();

function loadAnimationCamera(){
  const animationCameraContainer = document.getElementById('camera-animation');
  const baseURL = window.location.href;

  const animation = bodymovin.loadAnimation({
    container: animationCameraContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: baseURL + './lottie/camera.json',
  });
}

loadAnimationCamera();


//VENTANA EMERGENTE
//UBICACIÓN
// Obtener referencias a los elementos
const btnAbrirModal = document.getElementById('btnAbrirModal');
const modal = document.getElementById('modal');
const btnCerrarModal = document.getElementById('btnCerrarModal');

// Abrir la ventana emergente al hacer clic en el botón
btnAbrirModal.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Cerrar la ventana emergente al hacer clic en el botón de cerrar
btnCerrarModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Cerrar la ventana emergente también si se hace clic fuera de ella
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

//DRESS CODE
const btnAbrirModal2 = document.getElementById('btnAbrirModal2');
const modal2 = document.getElementById('modal2');
const btnCerrarModal2 = document.getElementById('btnCerrarModal2');

btnAbrirModal2.addEventListener('click', function() {
  modal2.style.display = 'block';
});

btnCerrarModal2.addEventListener('click', function() {
  modal2.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
});

// TIPS & NOTAS
const btnAbrirModal3 = document.getElementById('btnAbrirModal3');
const modal3 = document.getElementById('modal3');
const btnCerrarModal3 = document.getElementById('btnCerrarModal3');

btnAbrirModal3.addEventListener('click', function() {
  modal3.style.display = 'block';
});

btnCerrarModal3.addEventListener('click', function() {
  modal3.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal3) {
    modal3.style.display = 'none';
  }
});

// GIFTS
const btnAbrirModal4 = document.getElementById('btnAbrirModal4');
const modal4 = document.getElementById('modal4');
const btnCerrarModal4 = document.getElementById('btnCerrarModal4');

btnAbrirModal4.addEventListener('click', function() {
  modal4.style.display = 'block';
});

btnCerrarModal4.addEventListener('click', function() {
  modal4.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal4) {
    modal4.style.display = 'none';
  }
});

