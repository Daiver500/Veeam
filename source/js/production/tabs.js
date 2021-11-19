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
