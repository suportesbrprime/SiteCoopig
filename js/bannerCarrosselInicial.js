document.addEventListener('DOMContentLoaded', function() {
    const glider = new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });

    function autoplay() {
        if (glider.slide + 1 >= glider.slides.length) {
            glider.scrollItem(0); 
        } else {
            glider.scrollItem(glider.slide + 1);
        }
    }

    let autoplayInterval = setInterval(autoplay, 6000); 

    document.querySelector('.glider-prev').addEventListener('click', function() {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(autoplay, 6000);
    });

    document.querySelector('.glider-next').addEventListener('click', function() {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(autoplay, 6000);
    });

});