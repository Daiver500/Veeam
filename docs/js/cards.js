"use strict";

const data = [
    {
      "id": 1,
      "webp": "img/face-allan.webp",
      "webp2x": "img/face-allan@2x.webp 2x",
      "photo": "img/face-allan.jpg",
      "photo2x": "img/face-allan@2x.jpg 2x",
      "name": "Danny Allan",
      "position": "Chief Technology Officer"
    },
    {
      "id": 2,
      "webp": "img/face-olivier.webp",
      "webp2x": "img/face-olivier@2x.webp 2x",
      "photo": "img/face-olivier.jpg",
      "photo2x": "img/face-olivier@2x.jpg 2x",
      "name": "Olivier Robinne",
      "position": "Vice President, EMEA"
    },
    {
      "id": 3,
      "webp": "img/face-mike.webp",
      "webp2x": "img/face-mike@2x.webp 2x",
      "photo": "img/face-mike.jpg",
      "photo2x": "img/face-mike@2x.jpg 2x",
      "name": "Mike Resseler",
      "position": "Director Product Management"
    },
    {
      "id": 4,
      "webp": "img/face-rick.webp",
      "webp2x": "img/face-rick@2x.webp 2x",
      "photo": "img/face-rick.jpg",
      "photo2x": "img/face-rick@2x.jpg 2x",
      "name": "Rick Vanover",
      "position": "Senior Director, Product Strategy"
    },
    {
      "id": 5,
      "webp": "img/face-michael.webp",
      "webp2x": "img/face-michael@2x.webp 2x",
      "photo": "img/face-michael.jpg",
      "photo2x": "img/face-michael@2x.jpg 2x",
      "name": "Michael Cade",
      "position": "Senior Global Technologist, Product Strategy",
    }

]

let expertCards;
const cardsWrapper = document.querySelector(".experts__list");
const createCard = (item) => {
  const newCard = document.createElement("li");
  newCard.classList.add("experts__item");
  newCard.innerHTML = `
  <picture class="experts__picture">
    <source type="image/webp" srcset="${item.webp}, ${item.webp2x}" />
    <img class="experts__image" src="${item.photo}" srcset="${item.photo2x}" alt="employer card" width="164" height="158">
  </picture>
  <div class="experts__details">
    <p class="experts__title">${item.name}</p>
    <p class="experts__text">${item.position}</p>
  </div>
  `
  cardsWrapper.append(newCard);
}

const fillCardsList = (data) => {
  data.forEach((item) => {
    createCard(item);
  })
  expertCards = document.querySelectorAll(".experts__item");
}
fillCardsList(data);
