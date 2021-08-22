
const scrollElements = document.querySelectorAll(".scroll");
const scrollOffset = 300;
const elementInView = (el, offset) => {
  const elementTop = el.getBoundingClientRect().top;
  
  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, scrollOffset)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});