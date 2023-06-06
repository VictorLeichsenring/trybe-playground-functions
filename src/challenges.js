const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase
function splitSentence(phrase) {
  return phrase.split(' ');
}
// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}
// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
let playlist = [];
function addMusics(artistName, musicName, musicTime) {
  let music = {
    artist: artistName,
    music: musicName,
    musicTime: musicTime,
  };
  playlist.push(music);
  return playlist;
}
// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria
function moreExpensive(data, category) {
  let moreExpesiveProductName = data[category][0].name;
  let moreExpesiveProductPrice = data[category][0].price;
  for (let i = 1; i < data[category].length; i += 1) {
    if (data[category][i].price > moreExpesiveProductPrice) {
      moreExpesiveProductName = data[category][i].name;
      moreExpesiveProductPrice = data[category][i].price;
    }
  }
  return `O produto mais caro é: ${moreExpesiveProductName
  }, que custa: R$${moreExpesiveProductPrice.toFixed(2)}.`;
}
// Requisito 5 - Crie uma função que verifica se um determinado item já existe

function checkItem(data, category, item) {
  let productExist = false;
  for (let i = 0; i < data[category].length; i += 1) {
    if (data[category][i].name === item) {
      productExist = true;
    }
  }
  return productExist;
}
// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista
function addNewItem(data, category, item, price, ingredients, calories) {
  let product = {
    name: item,
    price: price,
    ingredients: ingredients,
    calories: calories,
  };
  if (checkItem(data, category, item) === true) {
    return `O produto: "${item}" já existe!`;
  } else {
    data[category].push(product);
    return product;
  }
}
// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
function counterGender(data) {
  let totalGender = {
    male: 0,
    female: 0,
  };
  for (let i = 0; i < data.guests.length; i += 1) {
    if (data.guests[i].gender === 'male') {
      totalGender.male += 1;
    } else {
      totalGender.female += 1;
    }
  }
  return totalGender;
}
// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado
function filterState() {}
// Requisito 9 - Crie uma função que altera a propriedade `picture`
function changePicture() {}
// Requisito 10 - Crie um função que gera um relatório
function generateReport() {}
// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => {}),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => {}),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => {}),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => {}),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => {}),
  filterState: typeof filterState === 'function' ? filterState : (() => {}),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => {}),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => {}),
};
