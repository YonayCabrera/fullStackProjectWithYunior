function initializeSliderFilter(apartamentos) {
    $("#slider-range").slider({
        range: true,
        min: getMinPrice(apartamentos),
        max: getMaxPrice(apartamentos),
        values: [getMinPrice(apartamentos), getMaxPrice(apartamentos)],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
}

function filterByPrice() {
    var min = $("#slider-range").slider("values", 0);
    var max = $("#slider-range").slider("values", 1);
    var filtersApartaments = apartaments.filter(apartamento => apartamento.price > min & apartamento.price < max);
    $("#Apartments").html('');
    paginationInHTML(filtersApartaments);
    paintApartments(filtersApartaments);
    console.log(filtersApartaments);
}

function getMinPrice(apartamentos) {
    return _.minBy(apartamentos, (apartamento) => apartamento.price).price;
}

function getMaxPrice(apartamentos) {
    return _.maxBy(apartamentos, (apartamento) => apartamento.price).price;
}