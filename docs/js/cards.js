"use strict";

const data = [
    {
      "id": 1,
      "photo": "img/face-allan.jpg",
      "photo2x": "img/face-allan.jpg",
      "name": "Danny Allan",
      "position": "Chief Technology Officer"
    },
    {
      "id": 2,
      "photo": "img/face-olivier.jpg",
      "photo2x": "img/face-olivier.jpg",
      "name": "Olivier Robinne",
      "position": "Vice President, EMEA"
    },
    {
      "id": 3,
      "photo": "img/face-mike.jpg",
      "photo2x": "img/face-mike.jpg",
      "name": "Mike Resseler",
      "position": "Director Product Management"
    },
    {
      "id": 4,
      "photo": "img/face-rick.jpg",
      "photo2x": "img/face-rick@2x.jpg",
      "name": "Rick Vanover",
      "position": "Senior Director, Product Strategy"
    },
    {
      "id": 5,
      "photo": "img/face-michael.jpg",
      "photo2x": "img/face-michael@2x.jpg",
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
    <img class="experts__image" src="${item.photo}" srcset="img/${item.photo2x} 2x" alt="employer card"
    width="164" height="158">
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
