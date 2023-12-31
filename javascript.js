const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["RÁPIDO.", "PRÁTICO.", "PLURAL."];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

function openForm() {
  document.getElementById("overlay").style.display = "block";
}

function closeForm() {
  document.getElementById("overlay").style.display = "none";
}


//--------------Arrumando scroll------------------

const links = document.querySelectorAll('.scroll-link');

links.forEach(link => {
  link.addEventListener('click', scrollToElement);
});

function scrollToElement(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1); // Remove o caractere '#' da âncora
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const offset = 120; // Ajuste da altura
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
}

// --------------- Arrumando active de nav ---------------
$(document).ready(function () {
  $('.nav-link').on('click', function () {
    // Remove a classe "active" de todos os itens de navegação
    $('.nav-link').removeClass('active');

    // Adiciona a classe "active" ao item de navegação clicado
    $(this).addClass('active');
  });
});


//----------- Mensagem ao submeter form ---------------
function onSubmit() {
  alert('Mensagem enviada com sucesso!')
}