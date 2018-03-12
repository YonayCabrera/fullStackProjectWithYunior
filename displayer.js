function apartmentsInHtml(apartamentos) {
    apartamentos.forEach(apartamento => {
        $("#Apartments").append(`<div class="card" style="width: 18rem;">
    <div class="card-body"><img src= "${apartamento['Hotel Image'].src}">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>`);
    });
}

function paginationInHTML(apartamentos) {
    $("#items").html('');
    var pages = apartamentos.length / 20;
    for (var i = 0; i < pages; i++) {
        $("#items").append(`<li class="page-item">
                <a class="page-link" id="${i}" onClick="setPage(${i})">${i}</a>
                            </li>`);
    }
}
