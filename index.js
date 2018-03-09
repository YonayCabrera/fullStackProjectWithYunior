var apartaments = [];
fetch('/data/london.json')
  .then(response => response.json())
  .then(apartamentos => {
    apartaments = apartamentos;
    paginationInHTML(apartamentos);
    paintApartments(apartamentos.slice(0, 20));
  })
  .catch(errorCallback => {
    console.log(errorCallback);
  })

function paintApartments(apartamentos) {
  apartmentsInHtml(apartamentos);
}

function setPage(page) {
  $("#App").html('');
  page = (page + 1) * 20;
  findPage(page);
}

function findPage(page) {
  paintApartments(apartaments.slice(page - 20, page));
}

