
const sections = document.querySelectorAll('.animate');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show'); 
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 
