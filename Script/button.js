  const carouselElement = document.getElementById('groupCarousel');
  const carouselWrapper = document.getElementById('myCarouselWrapper');

  // Listen for slide event (fires whenever carousel changes slide)
  carouselElement.addEventListener('slid.bs.carousel', function () {
    carouselWrapper.scrollIntoView({ behavior: 'smooth' });
  });

