document.addEventListener('DOMContentLoaded', () => {
   let productItem = document.querySelectorAll('.cabinets-slider__item'),
      productWrapper = document.querySelectorAll('.cabinets-slider__wrapper'),
      cabinetsSlider = document.querySelectorAll('.cabinets-slider');

   if (cabinetsSlider) {

      cabinetsSlider.forEach((el) => {
         el.classList.add('swiper-container');
      })
      productWrapper.forEach((el) => {
         el.classList.add('swiper-wrapper');
      })
      productItem.forEach((el) => {
         el.classList.add('swiper-slide');
      })

      Swiper = new Swiper(cabinetsSlider, {
         navigation: {
            nextEl: '.cabinets-slider-button-next',
            prevEl: '.cabinets-slider-button-prev',
         },
      });
   }
});