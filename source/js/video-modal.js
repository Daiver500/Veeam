"use strict";

const videoButton = document.querySelector(".access__button");
const modalVideo = document.querySelector(".modal-video");
const closeVideoModalButton = document.querySelector(".modal-video__close");
const modalVideoBody = document.querySelector(".modal-video__body");
const modalVideoInner = document.querySelector(".modal-video__inner");

modalVideoBody.remove();

const openVideoModal = () => {
  modalVideo.classList.remove("hidden");
  modalVideo.classList.add("fade")
  body.style.overflow = "hidden";
  document.addEventListener("keyup", escPressHandler);
  document.addEventListener("click", windowClickHandler);
  modalVideoInner.append(modalVideoBody);
}

const closeVideoModal = () => {
  modalVideo.classList.add("hidden");
  modalVideo.classList.remove("fadeIn")
  body.style.overflow = "visible";
  document.removeEventListener("keyup", escPressHandler);
  document.removeEventListener("click", windowClickHandler);
  modalVideoBody.remove();
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
