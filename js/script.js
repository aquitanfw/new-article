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
