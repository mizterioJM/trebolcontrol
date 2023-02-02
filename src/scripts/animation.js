!(function () {
  const scrollreveal = document.querySelectorAll('.scrollreveal');

  // Set up a new observer animation to Bottom

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          let dataTo = entry.target.getAttribute('data-to');
          if (dataTo === 'bottom') {
            entry.target.classList.add(
              'motion-safe:animate-[fadeInToBottom_1.5s_var(--i)_ease-in_forwards]'
            );
          } else if (dataTo === 'top') {
            entry.target.classList.add(
              'motion-safe:animate-[fadeInToTop_1.5s_var(--i)_ease_forwards]'
            );
          } else if (dataTo === 'right') {
            entry.target.classList.add(
              'motion-safe:animate-[fadeInToRight_1.5s_var(--i)_ease_forwards]'
            );
          } else if (dataTo === 'left') {
            entry.target.classList.add(
              'motion-safe:animate-[fadeInToLeft_1.5s_var(--i)_ease_forwards]'
            );
          } else {
            entry.target.classList.add(
              'motion-safe:animate-[fadeIn_1.5s_var(--i)_ease_forwards]'
            );
          }
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '30px 200px',
    }
  );

  scrollreveal.forEach((target) => {
    io.observe(target);
  });
})();
