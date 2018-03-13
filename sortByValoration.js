function sortByValoration() {
    if ($('#checkBoxValoration').is(':checked')) {
        var sortedApartments = _.sortBy(filtros, (apartamento) => apartamento["Reviews Core 4"].text);
        $("#Apartments").html('');
        initializeButtons();
        buttonOfpagination(sortedApartments);
        findPage(sortedApartments, currentPage);
        paintNumberOfApartments(sortedApartments);
    } else if (!$('#checkBoxValoration:checked').val()) {
        $("#Apartments").html('');
        initializeButtons();
        buttonOfpagination(filtros);
        findPage(filtros, currentPage);
        paintNumberOfApartments(filtros);
    }
}