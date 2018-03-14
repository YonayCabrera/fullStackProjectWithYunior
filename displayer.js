export function paintApartments(apartamentos) {
    apartamentos.forEach(apartamento => {
        $("#Apartments").append(`<div class="card" style="width: 18rem;">
    <div class="card-body"><img src= "${apartamento['Hotel Image'].src}">
    <p class="card-text">${apartamento["Hotel Description"].text}</p>
    </div>
    </div>`);
    });
    $(`#${previousPage}`).removeClass("active");
    $(`#${currentPage}`).addClass("active");
    previousPage = currentPage;

}

export function buttonOfpagination(apartamentos) {
    $("#items").html('');
    var pages = Math.round(apartamentos.length / 20);
    if (currentPage <= 3 && currentPage + 3 < pages) {
        addButtons(0, 5);
        addThreePoints();
    } else if (currentPage > 3 && currentPage + 3 < pages) {
        addButtons(currentPage - 3, currentPage + 3);
        addThreePoints()
    } else if (currentPage > 3 && currentPage + 3 >= pages) {
        addButtons(currentPage - 3, pages);
        addThreePoints()
    } else if (currentPage + 3 >= pages) {
        if(pages==0){
            pages=1;
        }
        addButtons(0, pages);
        addThreePoints()
    }

    function addButtons(init, final) {
        for (var i = init; i < final; i++) {
            $("#items").append(`<li class="page-item">
                        <a class="page-link" id="${i}" onClick="setPage(${i})">${i}</a>
                                    </li>`);
        }
    }

    function addThreePoints() {
        $("#items").append(`<li class="page-item">
        <a class="page-link" ">...</a>
                    </li>`);
    }

    $(`#${currentPage}`).addClass("active");

}
