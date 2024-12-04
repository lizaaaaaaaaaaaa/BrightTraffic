const firstHeader = document.getElementsByClassName("header-first")[0];
const secondHeader = document.getElementsByClassName("header-second")[0];

const firstFooter = document.getElementsByClassName("footer-first")[0];
const secondFooter = document.getElementsByClassName("footer-second")[0];

const remainingTime = document.getElementById("remainingTime");

let timeLeftUntilChange = 90;

setInterval(() => {
  if (timeLeftUntilChange > 0) {
    timeLeftUntilChange--;
    remainingTime.textContent = timeLeftUntilChange;
  } else {
    if (firstHeader.classList.contains("header-show")) {
      firstHeader.classList.remove("header-show");
      firstFooter.classList.remove("footer-show");
      firstFooter.classList.add("footer-hide");
      secondHeader.classList.add("header-show");
      secondFooter.classList.add("footer-show");
      secondFooter.classList.remove("footer-hide");
    } else {
      firstHeader.classList.add("header-show");
      firstFooter.classList.add("footer-show");
      firstFooter.classList.remove("footer-hide");
      secondHeader.classList.remove("header-show");
      secondFooter.classList.remove("footer-show");
      secondFooter.classList.add("footer-hide");
    }

    timeLeftUntilChange = 90; 
  }
}, 1000);

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.classList.add("visible");
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
    scrollToTopBtn.classList.remove("visible");
  }
});

scrollToTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
