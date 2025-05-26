const swiperMd = new Swiper('.swiper-md', {
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2.28
    },
    1024: {
      slidesPerView: 2
    },
  },
  loop: false,
})

const swiper = new Swiper('.swiper', {
  centeredSlides: false,
  centeredSlidesBounds: false,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      direction: "horizontal",
    },
    768: {
      slidesPerView: 5,
      direction: "horizontal",
    },
    1024: {
      slidesPerView: 5,
      direction: "vertical",
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
  cssmode: true
});

const sections = document.querySelectorAll('section');
const footerLinks = document.querySelectorAll('.footer-links');

// Function to update active state based on section visibility
const updateActiveLinks = () => {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const viewportTop = 100; // Adjust as needed

    if (rect.top <= viewportTop && rect.bottom >= viewportTop) {
      // Clear active state from all links
      footerLinks.forEach(button => button.classList.remove('active'));
      // Set active state on corresponding link
      if (footerLinks[index]) {
        footerLinks[index].classList.add('active');
      }
    }
  });
};

// Click event listener
footerLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Clear active state from all links
    footerLinks.forEach(otherLink => otherLink.classList.remove('active'));
    // Set active state on clicked link
    link.classList.add('active');
  });
});

// Scroll event listener
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', updateActiveLinks);
  updateActiveLinks(); // Initial check
});