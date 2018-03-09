fetch('/data/london.json')
  .then(response => response.json())
  .then(apartamentos => {
    console.log(apartamentos.slice(0,20));
    paintApartments(apartamentos.slice(0, 20));
  })
  .catch(errorCallback=>{
    console.log(errorCallback);
  })

function paintApartments(apartamentos){
  apartmentsInHtml(apartamentos);
}

