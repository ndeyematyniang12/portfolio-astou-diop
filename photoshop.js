    // Recherche
    const searchInput = document.getElementById('videoSearch');
    const videoCards = document.querySelectorAll('.video-card');
    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.toLowerCase();
      videoCards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        card.style.display = title.includes(searchValue) ? 'block' : 'none';
      });
    });

    // Slider
    document.querySelectorAll('.slider').forEach(slider => {
      let index = 0;
      const slides = slider.querySelectorAll('.slide');
      const prev = slider.querySelector('.prev');
      const next = slider.querySelector('.next');
      
      function showSlide(i) {
        slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
      }
      
      prev.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : slides.length - 1;
        showSlide(index);
      });

      next.addEventListener('click', () => {
        index = (index < slides.length - 1) ? index + 1 : 0;
        showSlide(index);
      });
    });
