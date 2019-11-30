import "./index.css";
import "./assets/hamburger.png";
import "./assets/promotion-menu-burger.png";
import "./assets/promotion-menu-burger1.png";

const slideMenus = () => {
  var a = 0;
  var container = document.querySelector(".container");
  container.style["transition"] = "1s";
  var itemCount = document.querySelectorAll(".menu").length;
  setInterval(() => {
    a++;
    if (a == itemCount) {
      a = 0;
    }
    var s = `translateY(-${a * 1080}px)`;
    container.style["transform"] = s;
    setTimeout(() => {
      console.log(a);
      if (a == 0) burgerAnimation();
      else if (a == 1) promoAnimation();
      else if (a == 2) sushiAnimations();
    }, 800);
  }, 8000);
};

const burgerAnimation = () => {
  var list = document.getElementsByClassName("burger-item");
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    element.style["transition"] = "0s";
    element.style["transform"] = "translateX(-1000px)";
    setTimeout(() => {
      element.style["transition"] = `${0.5 + index / 4}s`;
      element.style["transform"] = "translateX(0px)";
    }, 10);
  }
  var burgerImage = document.getElementById("burger-menu-image");
  burgerImage.style["transition"] = "0s";
  burgerImage.style["transform"] = "scale(1)";
  setTimeout(() => {
    burgerImage.style["transition"] = "4s";
    burgerImage.style["transform"] = "scale(1.2)";
  }, 10);

  setTimeout(() => {
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      element.style["transition"] = "0s";
      element.style["transform"] = "translateX(-1000px)";
    }
    var burgerImage = document.getElementById("burger-menu-image");
    burgerImage.style["transition"] = "0s";
    burgerImage.style["transform"] = "scale(1)";
  }, 10000);
};

const promoAnimation = () => {
  var left = document.getElementsByClassName("promo-item left")[0];
  left.style["transition"] = "0s";
  left.style["transform"] = "translateY(-100%)";
  setTimeout(() => {
    left.style["transition"] = "1s";
    left.style["transform"] = "translateY(0%)";
  }, 50);

  var center = document.getElementsByClassName("promo-item center")[0];
  center.style["transition"] = "0s";
  center.style["transform"] = "translateY(100%)";
  setTimeout(() => {
    center.style["transition"] = "1s";
    center.style["transform"] = "translateY(0%)";
  }, 300);

  var right = document.getElementsByClassName("promo-item right")[0];
  right.style["transition"] = "0s";
  right.style["transform"] = "translateY(-100%)";
  setTimeout(() => {
    right.style["transition"] = "1s";
    right.style["transform"] = "translateY(0%)";
  }, 800);

  setTimeout(() => {
    left.style["transition"] = "0s";
    left.style["transform"] = "translateY(100%)";
    center.style["transition"] = "0s";
    center.style["transform"] = "translateY(100%)";
    right.style["transition"] = "0s";
    right.style["transform"] = "translateY(100%)";
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
    console.log(bus.className.baseVal);
  }, 50);
  var items = document.getElementsByClassName("sushi-item");
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    element.style["transition"] = "0s";
    element.style["transform"] = "translateX(80px) scale(0)";
    setTimeout(() => {
      element.style["transition"] = "1s";
      element.style["transform"] = "translateX(0px) scale(1)";
    }, (index + 1) * 1000 + 50);
  }
  setTimeout(() => {
    bus.className.baseVal = bus.className.baseVal.replace(" animate-bus", "");
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      element.style["transition"] = "0s";
      element.style["transform"] = "translateX(80px) scale(0)";
    }
  }, 9000);
};

burgerAnimation();
slideMenus();
