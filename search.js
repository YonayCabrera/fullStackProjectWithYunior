function search() {
    var inputSearch = $("#search-input").val().toLowerCase();
    apartmentsWithFilter = apartaments.filter(apartamento => {
        var lowerCaseApartmentsDescription = apartamento["Hotel Description"].text.toLowerCase();
        return lowerCaseApartmentsDescription.includes(inputSearch);
    });
    $("#Apartments").html('');
    initializeButtons();
    initializeSliderFilter(apartmentsWithFilter);
    buttonOfpagination(apartmentsWithFilter);
    findPage(apartmentsWithFilter, currentPage);
    paintNumberOfApartments(apartmentsWithFilter);
}