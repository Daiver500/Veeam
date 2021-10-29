"use strict";

const videoButton = document.querySelector(".access__button");
const modalVideo = document.querySelector(".modal-video");
const closeVideoModalButton = document.querySelector(".modal-video__close");

const openVideoModal = () => {
  modalVideo.classList.remove("hidden");
  modalVideo.classList.add("fadeIn")
  body.style.overflow = "hidden";
  document.addEventListener("keyup", escPressHandler);
  document.addEventListener("click", windowClickHandler);
}

const closeVideoModal = () => {
  modalVideo.classList.add("hidden");
  modalVideo.classList.remove("fadeIn")
  body.style.overflow = "visible";
  document.removeEventListener("keyup", escPressHandler);
  document.removeEventListener("click", windowClickHandler);
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
