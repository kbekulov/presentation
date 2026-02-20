const slides = Array.from(document.querySelectorAll('.slide'));
const currentEl = document.getElementById('slideCurrent');
const totalEl = document.getElementById('slideTotal');
const titleEl = document.getElementById('slideTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
totalEl.textContent = String(slides.length);

function render() {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  currentEl.textContent = String(index + 1);
  titleEl.textContent = slides[index].dataset.title || `Slide ${index + 1}`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
}

function next() {
  if (index < slides.length - 1) {
    index += 1;
    render();
  }
}

function prev() {
  if (index > 0) {
    index -= 1;
    render();
  }
}

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
    event.preventDefault();
    next();
  }
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    prev();
  }
  if (event.key.toLowerCase() === 'home') {
    index = 0;
    render();
  }
  if (event.key.toLowerCase() === 'end') {
    index = slides.length - 1;
    render();
  }
});

render();
