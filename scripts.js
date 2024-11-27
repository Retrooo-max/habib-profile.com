// Smooth scroll untuk navigasi
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });

  





// Ambil elemen tombol dan pop-up
const contactBtn = document.getElementById('contact-btn');
const closeContactBtn = document.getElementById('close-contact-btn');
const contactPopup = document.getElementById('contact-popup');

// Fungsi untuk membuka pop-up kontak
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    contactPopup.classList.add('visible');
  });
}

// Fungsi untuk menutup pop-up kontak
if (closeContactBtn) {
  closeContactBtn.addEventListener('click', () => {
    contactPopup.classList.remove('visible');
  });
}

// Menutup pop-up ketika klik di luar area konten
if (contactPopup) {
  contactPopup.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
      contactPopup.classList.remove('visible');
    }
  });
}


// Ambil elemen tombol
const learnMoreBtn = document.getElementById('learn-more-btn');

// Tambahkan event listener untuk mengonfirmasi unduhan
learnMoreBtn.addEventListener('click', (e) => {
  alert('CV Anda sedang diunduh. Terima kasih telah mengunduh!');
});

