document.addEventListener("DOMContentLoaded", () => {
  // 1. Logika Hamburger Menu (Versi Mobile)
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Ganti icon hamburger jadi 'X'
      const icon = hamburger.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
      } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
      }
    });
  }

  // 2. Smooth Scroll & Tutup Menu Otomatis
  navItems.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      // Tutup menu hp kalo ada yang di-klik
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
      }

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        // Beri offset sedikit biar judul nggak ketutupan sticky header
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});