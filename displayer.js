function apartmentsInHtml(apartamentos) {
    apartamentos.forEach(apartamento => {
        $("#App").append(`<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body"><img src= "${apartamento[ 'Hotel Image' ].src}">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>`);
    });


    
}
