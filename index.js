import {initializeSliderFilter} from './filtersByPrices.js';
import {buttonOfpagination} from './displayer.js';
import {findPage} from './pagination.js';
import {addButtons,addThreePoints} from './displayer.js';

addThreePoints();
var apartaments = []
var apartmentsWithFilter = [];
var currentPage = 0;
var previousPage = 0;
var filtros = [];

function activate() {
  getApartaments().then(apartamentos => {
    console.log("live")
    // A : en apartamentos estan todos 
    // B : en apartments estan todos 
    apartaments = apartamentos;
    apartmentsWithFilter = apartamentos;
    filtros = apartamentos;
    addValoration(apartmentsWithFilter);
    paintNumberOfApartments(apartamentos);
    addPrices(apartamentos);
    buttonOfpagination(apartamentos);
    findPage(apartaments, currentPage);
    initializeSliderFilter(apartamentos);
  })
}


activate()

///////////
function paintNumberOfApartments(apartamentos) {
  $("#numbers-of-apartments").text(`Number of apartments: ${apartamentos.length}`);
}

function getApartaments() {
  return fetch('/data/london.json')
    .then(response => response.json())
    .then(apartamentos => {
      return apartamentos;
    })
    .catch(errorCallback => {
      console.log(errorCallback);
    })
}

function addPrices(apartamentos) {
  apartamentos.map(apartamento => {
    apartamento.price = Math.floor((Math.random() * 500) + 500);
  });
}
function addValoration(apartamentos) {
  apartamentos.map(apartamento => {
    if (!apartamento["Reviews Core 4"]) {
      apartamento["Reviews Core 4"] = {};
      apartamento["Reviews Core 4"].text = 0;
    }
  })
}





