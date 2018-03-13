
function initializeSliderFilter(apartamentos) {
    resetSlider();
    $("#slider-range").slider({
        range: true,
        min: getMinPrice(apartamentos),
        max: getMaxPrice(apartamentos),
        values: [getMinPrice(apartamentos), getMaxPrice(apartamentos)],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + getRangeOfLeftSlider() +
        " - $" + getRangeOfRightSlider());
}

function filterByPrice() {
    var min = getRangeOfLeftSlider();
    var max = getRangeOfRightSlider();
    filtros = apartmentsWithFilter.filter(apartamento => {
        return (apartamento.price > min & apartamento.price < max)
    });
    $("#Apartments").html('');
    initializeButtons();
    buttonOfpagination(filtros);
    findPage(filtros, currentPage);
    paintNumberOfApartments(filtros);
    sortByValoration();
}

function getRangeOfLeftSlider() {
    return $("#slider-range").slider("values", 0)
}

function getRangeOfRightSlider() {
    return $("#slider-range").slider("values", 1);
}

function getMinPrice(apartamentos) {
    return _.minBy(apartamentos, (apartamento) => apartamento.price).price;
}

function getMaxPrice(apartamentos) {
    return _.maxBy(apartamentos, (apartamento) => apartamento.price).price;
}

function resetSlider() {
    $("#slider-range").slider({
        values:[0,0]
    });
  }