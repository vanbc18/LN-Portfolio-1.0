const swiperMd = new Swiper('.swiper-md', {
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2.28
    }
  },
  loop: false,
})

const swiper = new Swiper('.swiper', {
  centeredSlides: false,
  centeredSlidesBounds: false,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5
    },
  },
  lazyPreloadPrevNext: 4,
  freeMode: {
      enabled: true,
    },
  effect: "slide",
   mousewheel: {
      inverse: true,
    },
  controller: {
      inverse: true,
    },
    followFinger: true,
  loop: false,
  slideToClickedSlide: true,
  threshold: 0,
  toucheReleaseOnEdges: true,
  allowTouchMove: true,
  cssmode: true,
});

const footerLinks = document.querySelectorAll('.footer-links'); // Select ALL elements
const sections = {
  '#contexte': document.getElementById('contexte'),
  '#objectifs': document.getElementById('objectifs'),
  '#demarche': document.getElementById('demarche'),
  '#results': document.getElementById('results')
};

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  for (const sectionId in sections) {
    const section = sections[sectionId];
    if (!section) continue; // Handle cases where section might not be found

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    const correspondingLink = Array.from(footerLinks).find(link => link.id);

    if (correspondingLink) {
        if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionBottom) {
            // Activate corresponding link and deactivate others
            footerLinks.forEach(link => link.classList.remove('active')); // Clear all first
            correspondingLink.classList.add('active');
        } 
    }
  }
});

footerLinks.forEach(link => {
  link.addEventListener('click', () => {
    // 1. Remove 'btn-clicked' from *all* buttons
    footerLinks.forEach(otherLink => {
      otherLink.classList.remove('active');
    });

    // 2. Add 'btn-clicked' to the *clicked* button
    link.classList.add('active');
  });
});