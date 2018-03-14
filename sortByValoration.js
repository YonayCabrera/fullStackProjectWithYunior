function sortByValoration() {
    if ($('#checkBoxValoration').is(':checked')) {
        var sortedApartments = _.sortBy(filtros, (apartamento) => parseFloat(apartamento["Reviews Core 4"].text)).reverse();
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