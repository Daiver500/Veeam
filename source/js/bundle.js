"use strict";

const info = [
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
fillCardsList(info);

"use strict";

const form = document.querySelector(".form__body");
const body = document.querySelector(".page");

const message = {
  success: "You information was sent. Thank you!"
}

const showSuccessModal = () => {
  const successModal = document.createElement("section");
  successModal.classList.add("modal-success");
  successModal.innerHTML = `
  <div class="modal-success__inner">
  <div class="modal-success__title">
    <p class="modal-success__text">${message.success}</p>
  </div>
  <button class="modal-success__close" type="button" aria-label="Закрыть модальное окно">
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M0.146522 0.853553C-0.04874 0.658291 -0.04874 0.341709 0.146522 0.146447C0.341784 -0.0488155 0.658367 -0.0488156 0.853629 0.146447L8.27821 7.57103L15.7028 0.14645C15.8981 -0.0488124 16.2146 -0.0488125 16.4099 0.14645C16.6052 0.341712 16.6052 0.658294 16.4099 0.853556L8.98532 8.27814L16.41 15.7028C16.6052 15.8981 16.6052 16.2146 16.41 16.4099C16.2147 16.6052 15.8981 16.6052 15.7029 16.4099L8.27821 8.98525L0.853553 16.4099C0.658291 16.6052 0.341709 16.6052 0.146447 16.4099C-0.0488155 16.2146 -0.0488156 15.8981 0.146447 15.7028L7.57111 8.27814L0.146522 0.853553Z"
        fill="currentColor" />
    </svg>
  </button>
  </div>`
  body.prepend(successModal);
  successModal.classList.add("bounce")
  setTimeout(() => {
    successModal.remove();
    body.style.overflow = "visible";
  }, 30000)

  const modalSuccessClose = document.querySelector(".modal-success__close");
  const modalSuccess = document.querySelector(".modal-success")

  const closeSuccessModal = () => {
    successModal.remove();
    form.reset();
    body.style.overflow = "visible";
    modalSuccessClose.removeEventListener("click", closeSuccessModal);
    document.removeEventListener("keyup", escPressHandler);
    document.removeEventListener("click", windowClickHandler);
  }

  const escPressHandler = (evt) => {
    if (evt.code === `Escape`) {
      closeSuccessModal();
    }
  }

  const windowClickHandler = (evt) => {
    const target = evt.target;
      if (target === modalSuccess) {
        closeSuccessModal();
    }
  }

  modalSuccessClose.addEventListener("click", closeSuccessModal);
  document.addEventListener("keyup", escPressHandler);
  document.addEventListener("click", windowClickHandler);
}

const formSendingHandler = (evt) => {
  evt.preventDefault();
  showSuccessModal();
  body.style.overflow = "hidden";
}

form.addEventListener("submit", formSendingHandler);

"use strict";

const expertItems = document.querySelectorAll(".experts__item");

const hideExperts = () => {
    expertItems.forEach((expert) => {
      expert.classList.remove("experts__item--active");
    });
}
hideExperts()

const showExpert = (i = 0) => {
    expertItems[i].classList.add("experts__item--active");
}
showExpert()

const checkExpert = (evt) => {
    const target = evt.target.closest(".experts__item");
    if (target && target.classList.contains("experts__item")) {
        expertItems.forEach((expert, i) => {
           if (target === expert) {
            hideExperts();
            showExpert(i);
           }
        })
    }
}

expertItems.forEach((expert) => {
  expert.addEventListener("click", checkExpert)
})

"use strict";

const videoButton = document.querySelector(".access__button");
const modalVideo = document.querySelector(".modal-video");
const closeVideoModalButton = document.querySelector(".modal-video__close");
const modalVideoInner = document.querySelector(".modal-video__inner");

const openVideoModal = () => {
  modalVideo.classList.remove("hidden");
  modalVideo.classList.add("fade")
  body.style.overflow = "hidden";
  document.addEventListener("keyup", escPressHandler);
  document.addEventListener("click", windowClickHandler);
  modalVideo.append(modalVideoInner);
}

const closeVideoModal = () => {
  modalVideo.classList.add("hidden");
  modalVideo.classList.remove("fadeIn")
  body.style.overflow = "visible";
  document.removeEventListener("keyup", escPressHandler);
  document.removeEventListener("click", windowClickHandler);
  modalVideoInner.remove();
}

const escPressHandler = (evt) => {
    if (evt.code === `Escape`) {
        closeVideoModal();
    }
  }

  const windowClickHandler = (evt) => {
    const target = evt.target;
      if (target === modalVideo) {
        closeVideoModal();
    }
  }

videoButton.addEventListener("click", openVideoModal)
closeVideoModalButton.addEventListener("click", closeVideoModal)
