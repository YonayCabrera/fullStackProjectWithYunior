function searchDescription() {
    var inputSearch = $("#search-input").val().toLowerCase();
    apartmentsWithFilter = apartaments.filter(apartamento => {
        var lowerCaseApartmentsDescription = apartamento["Hotel Description"].text.toLowerCase();
        return lowerCaseApartmentsDescription.includes(inputSearch);
    });
    filtros = apartmentsWithFilter;
    $("#Apartments").html('');
    initializeButtons();
    initializeSliderFilter(filtros);
    buttonOfpagination(filtros);
    findPage(filtros, currentPage);
    paintNumberOfApartments(filtros);
}