import "./index.css";
import "./assets/hamburger.png";
import "./assets/promotion-menu-burger.png";
import "./assets/promotion-menu-burger1.png";

const changeElementTransform = (element, transition, transform) => {
  element.style["transition"] = transition;
  element.style["transform"] = transform;
};

const slideMenus = () => {
  var slideIndex = 0;
  var container = document.querySelector(".container");
  container.style["transition"] = "1s";
  var itemCount = document.querySelectorAll(".menu").length;
  setInterval(() => {
    slideIndex++;
    if (slideIndex == itemCount) {
      slideIndex = 0;
    }
    container.style["transform"] = `translateY(-${slideIndex * 1080}px)`;
    setTimeout(() => {
      if (slideIndex == 0) burgerAnimation();
      else if (slideIndex == 1) promoAnimation();
      else if (slideIndex == 2) sushiAnimations();
    }, 800);
  }, 8000);
};

const burgerAnimation = () => {
  let list = document.getElementsByClassName("burger-item");
  let burgerImage = document.getElementById("burger-menu-image");
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    setTimeout(() => {
      // calling this method directly causes a bug on the first call so that setTimeout should be here
      changeElementTransform(element, `${0.5 + index / 4}s`, "translateX(0px)");
    }, 1);
  }
  setTimeout(() => {
    changeElementTransform(burgerImage, "4s", "scale(1.2)");
  }, 1);
  setTimeout(() => {
    for (let index = 0; index < list.length; index++) {
      let element = list[index];
      changeElementTransform(element, "0s", "translateX(-1000px)");
    }
    changeElementTransform(burgerImage, "0s", "scale(1)");
  }, 10000);
};

const promoAnimation = () => {
  var left = document.querySelector(".promo-item.left");
  var center = document.querySelector(".promo-item.center");
  var right = document.querySelector(".promo-item.right");

  changeElementTransform(left, "0s", "translateY(-100%)");
  setTimeout(() => {
    changeElementTransform(left, "1s", "translateY(0%)");
  }, 50);

  changeElementTransform(center, "0s", "translateY(100%)");
  setTimeout(() => {
    changeElementTransform(center, "1s", "translateY(0%)");
  }, 300);

  changeElementTransform(right, "0s", "translateY(-100%)");
  setTimeout(() => {
    changeElementTransform(right, "1s", "translateY(0%)");
  }, 800);

  setTimeout(() => {
    changeElementTransform(left, "0s", "translateY(100%)");
    changeElementTransform(center, "0s", "translateY(100%)");
    changeElementTransform(right, "0s", "translateY(100%)");
  }, 17000);
};

const sushiAnimations = () => {
  var bus = document.getElementById("bus");
  var {
    className: { baseVal }
  } = bus;
  setTimeout(() => {
    baseVal = baseVal + " animate-bus";
    bus.className.baseVal = baseVal;
  }, 50);
  var items = document.getElementsByClassName("sushi-item");
  for (let index = 0; index < items.length; index++) {
    let element = items[index];
    changeElementTransform(element, "0s", "translateX(80px) scale(0)");
    setTimeout(() => {
      changeElementTransform(element, "1s", "translateX(0px) scale(1)");
    }, (index + 1) * 1000 + 50);
  }
  setTimeout(() => {
    bus.className.baseVal = baseVal.replace(" animate-bus", "");
    for (let index = 0; index < items.length; index++) {
      let element = items[index];
      changeElementTransform(element, "0s", "translateX(80px) scale(0)");
    }
  }, 9000);
};

burgerAnimation();
slideMenus();
