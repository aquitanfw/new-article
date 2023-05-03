$('.new-article-images-mobile').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: `<img src='../../img/slick-arrow-left.svg' class="article-slick-prev article-slick"/>`,
    nextArrow: `<img src='../../img/slick-arrow-right.svg' class="article-slick-next article-slick"/>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
$('.faq-accordeon .accordeon__question').on('click', function () {
    // $(this) - эл-т, по которому кликнули
    // next() - следующий эл-т
    var answer = $(this).next();
    // slideToggle() - развернуть эл-т (display: block), если он скрыт
    // или свернуть эл-т (display: none), если он показан
    answer.slideToggle();
    // взять все .akk__answer, которые не answer
    // и скрыть их при помощи slideUp()
    $('.accordeon .accordeon__answer').not(answer).slideUp();
});
