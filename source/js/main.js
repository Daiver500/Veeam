"use strict";

const data = [
    {
      "id": 1,
      "photo": "img/face-allan.jpg",
      "name": "Danny Allan",
      "position": "Chief Technology Officer"
    },
    {
      "id": 2,
      "photo": "img/face-olivier.jpg",
      "name": "Olivier Robinne",
      "position": "Vice President, EMEA"
    },
    {
      "id": 3,
      "photo": "img/face-mike.jpg",
      "name": "Mike Resseler",
      "position": "Director Product Management"
    },
    {
      "id": 4,
      "photo": "img/face-rick.jpg",
      "name": "Rick Vanover",
      "position": "Senior Director, Product Strategy"
    },
    {
      "id": 5,
      "photo": "img/face-michael.jpg",
      "name": "Michael Cade",
      "position": "Senior Global Technologist, Product Strategy",
    }

]

// Modal window

const openModalButton = document.querySelector(".details__button");
const closeModalButton = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const body = document.querySelector(".page");

const openModal = () => {
    modal.classList.remove("hidden");
    closeModalButton.addEventListener("click", closeModal);
    document.addEventListener("keyup", escPressHandler);
    document.addEventListener("click", windowClickHandler);
    body.style.overflow = "hidden";
}

const closeModal = () => {
    modal.classList.add("hidden");
    closeModalButton.removeEventListener("click", closeModal)
    document.removeEventListener("keyup", escPressHandler);
    document.removeEventListener("click", windowClickHandler);
    modalForm.reset();
    body.style.overflow = "visible";
}

const escPressHandler = (evt) => {
    if (evt.code === `Escape`) {
        closeModal();
    }
    if (evt.code === `Escape`) {
        window.server.closeThanksModal();
    }
}

const windowClickHandler = (evt) => {
    const target = evt.target;
    if (target === modal) {
        closeModal();
    }
}

openModalButton.addEventListener("click", openModal)

