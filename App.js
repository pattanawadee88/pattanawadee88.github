// const scrollOffset = 90;
 
// const scrollElement = document.querySelector(".scroll");
 
// const elementInView = (el, offset = 0) => {
//   const elementTop = el.getBoundingClientRect().top;
 
//   return (
//     elementTop <= 
//     ((window.innerHeight || document.documentElement.clientHeight) - offset)
//   );
// };
 
// const displayScrollElement = () => {
//   scrollElement.classList.add('scrolled');
// }
 
// const hideScrollElement = () => {
//   scrollElement.classList.remove('scrolled');
// }
 
// const handleScrollAnimation = () => {
//   if (elementInView(scrollElement, scrollOffset)) {
//       displayScrollElement();
//   } else {
//     hideScrollElement();
//   }
// }
 
// window.addEventListener('scroll', () => {
//   handleScrollAnimation();
// })

const scrollElements = document.querySelectorAll(".scroll");
const pro = document.querySelector("#projects-container")
const length = pro.getBoundingClientRect().top;
console.log(window.innerHeight)
console.log(length)
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