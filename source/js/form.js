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
