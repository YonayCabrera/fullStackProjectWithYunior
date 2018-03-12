var apartaments = [];


function activate() {
  getApartaments().then(apartamentos => {

    // A : en apartamentos estan todos 
    // B : en apartments estan todos 
    apartaments = apartamentos;
    addPrices(apartamentos);
    paginationInHTML(apartamentos);
    paintApartments(apartamentos);
    initializeSliderFilter(apartamentos);
  })
}


activate()

///////////

function getApartaments() {
  return fetch('/data/london.json')
    .then(response => response.json())
    .then(apartamentos => {
      apartaments = apartamentos;
      return apartamentos;
    })
    .catch(errorCallback => {
      console.log(errorCallback);
    })
}

function paintApartments(apartamentos) {
  apartmentsInHtml(apartamentos.slice(0, 20));
}

function addPrices(apartamentos) {
  apartamentos.map(apartamento => {
    apartamento.price = Math.floor((Math.random() * 500) + 500);
  });
}

function setPage(page) {
  $("#Apartments").html('');
  page = (page + 1) * 20;
  findPage(page);
}

function findPage(page) {
  paintApartments(apartaments.slice(page - 20, page));
}





