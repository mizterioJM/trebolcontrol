const navbar = document.getElementById('navbar');
const contact = document.getElementById('header-contact');

const io = new IntersectionObserver(
  (entries) => {
    entries.map((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.add(
          'fixed',
          'bg-gray-900/70',
          'backdrop-blur-xl',
          'shadow-2xl',
          'shadow-gray-50/10'
        );
      } else {
        navbar.classList.remove(
          'fixed',
          'bg-gray-900/70',
          'backdrop-blur-xl',
          'shadow-2xl',
          'shadow-gray-50/10'
        );
      }
    });
  },
  {
    threshold: 0,
  }
);
io.observe(contact);
