let intervalId;



document.querySelectorAll(".nav__btn").forEach((e) => {
  e.addEventListener("click", (e) => {
    const btnElem = e.currentTarget.dataset.path;
    document.querySelectorAll(".nav__sub-list").forEach((e) => {
      if (
        !document
          .querySelector(`[data-target=${btnElem}]`)
          .classList.contains("open")
      ) {
        document
          .querySelector(`[data-target=${btnElem}]`)
          .classList.add("menu__active");
        intervalId = setTimeout(() => {
          document
            .querySelector(`[data-target=${btnElem}]`)
            .classList.add("open");
        });
      }
      if (
        document
          .querySelector(`[data-target=${btnElem}]`)
          .classList.contains("open")
      ) {
        clearTimeout(intervalId);
        document
          .querySelector(`[data-target=${btnElem}]`)
          .classList.remove("menu__active");
        intervalId = setTimeout(() => {
          document
            .querySelector(`[data-target=${btnElem}]`)
            .classList.remove("open");
        });
      }
    });
  });
});
