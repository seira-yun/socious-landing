const scrollArrow = document.getElementById("scroll-arrow");

const myScrollFunc = () => {
  let y = window.scrollY;
  if (y >= 800) {
    scrollArrow.className = "scroll-arrow up show"
  } else {
    scrollArrow.className = "scroll-arrow up hide"
  }
};

window.addEventListener("scroll", myScrollFunc);
