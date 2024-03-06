let profile = document.querySelector(".introduction");

// 스크롤 이동에 따른 애니메이션
let value;
window.addEventListener("scroll", function () {
  value = this.window.scrollY;
  if (value > 222) {
    profile.style.animation = "disappear 1s ease-out forwards";
  } else {
    profile.style.animation = "slide 1s ease-out";
  }
});

let businessCardFront = document.querySelector(".front");
let businessCardBack = document.querySelector(".back");

window.addEventListener("scroll", function () {
  if (value > 400 && value < 1500) {
    businessCardFront.style.transition = "all 0.5s linear";
    businessCardFront.style.transform = "perspective(700px) rotateX(180deg)";
    businessCardBack.style.transition = "all 0.5s linear";
    businessCardBack.style.transform = "perspective(700px) rotateX(0deg)";
  } else {
    businessCardFront.style.transition = "all 0.5s linear";
    businessCardFront.style.transform = "perspective(700px) rotateX(0deg)";
    businessCardBack.style.transition = "all 0.5s linear";
    businessCardBack.style.transform = "perspective(700px) rotateX(180deg)";
  }
});

// header 색 조절
let header = document.getElementsByTagName("header")[0];
const navbar_elements = document.querySelectorAll(".navbar ul li span");
const navbar_h1 = document.querySelector(".navbar .logo a h1");

window.addEventListener("scroll", function () {
  if (value > 50) {
    header.classList.add("bg_white");
    header.classList.add("box_shadow");
    navbar_h1.style.color = "black";
    navbar_elements.forEach((element) => {
      element.style.color = "black";
    });
  } else {
    header.classList.remove("bg_white");
    header.classList.remove("box_shadow");
    navbar_h1.style.color = "hsla(0, 0%, 100%, 0.7)";
    navbar_elements.forEach((element) => {
      element.style.color = "hsla(0, 0%, 100%, 0.7)";
    });
  }
});

// 각 nav에 이벤트 등록
navbar_elements.forEach((element) => {
  element.addEventListener("click", () => {
    goToScroll(element.id);
  });
});

// 스크롤 이동
function goToScroll(name) {
  var location = document.querySelector("." + name).offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
}

// 스킬 숙련도
const skillAll = document.querySelectorAll(".skill");
skillAll.forEach((element) =>
  element.addEventListener("mouseenter", () => {
    element.firstElementChild.style.visibility = "visible";
  })
);
skillAll.forEach((element) =>
  element.addEventListener("mouseleave", () => {
    element.firstElementChild.style.visibility = "hidden";
  })
);

// 카루셀

const carouselSlide = document.querySelector(".carousel");
const carouselContents = document.querySelectorAll(".carousel_item");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

const pages = document.getElementById("pages");

let counter = 1;
let page = 1;
const size = 500;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
// 이전 페이지, 다음 페이지
nextBtn.addEventListener("click", () => {
  if (counter >= carouselContents.length - 1) return;
  carouselSlide.style.transition = "transform 0.3s ease-in-out";
  counter++;
  page++;
  if (carouselContents[counter].id === "firstClone") {
    page = 1;
  }
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  pages.innerText = `${page} /  ${carouselSlide.childElementCount - 2}`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.3s ease-in-out";
  counter--;
  page--;
  if (carouselContents[counter].id === "lastClone") {
    page = carouselSlide.childElementCount - 2;
  }
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  pages.innerText = `${page} /  ${carouselSlide.childElementCount - 2}`;
});

carouselSlide.addEventListener("transitionend", function () {
  if (carouselContents[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselContents.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselContents[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselContents.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

// let's go 버튼 이벤트 등록
document.querySelector(".Lets-go-btn").addEventListener("click", () => {
  goToScroll("container");
});

// 페이지 개수
function render() {
  pages.innerText = `${page} /  ${carouselSlide.childElementCount - 2}`;
}
render();
