const downArrow = document.querySelector(".down-arrow");
const downArrowCompany = document.querySelector(".down-arrow-company");
const upArrow = document.querySelector(".up-arrow");
const upArrowCompany = document.querySelector(".up-arrow-company");
const menuItems = document.querySelector(".dropdown-menu-features");
const menuItemsCompany = document.querySelector(".dropdown-menu-company");

downArrow.addEventListener("click", () => {
  menuItems.classList.add("open");
  downArrow.classList.add("close");
  upArrow.classList.add("open");
});

upArrow.addEventListener("click", () => {
  menuItems.classList.remove("open");
  downArrow.classList.remove("close");
  upArrow.classList.remove("open");
});

downArrowCompany.addEventListener("click", () => {
  menuItemsCompany.classList.add("open");
  downArrowCompany.classList.add("close");
  upArrowCompany.classList.add("open");
});

upArrowCompany.addEventListener("click", () => {
  menuItemsCompany.classList.remove("open");
  downArrowCompany.classList.remove("close");
  upArrowCompany.classList.remove("open");
});

// Mobile Javascript
const sideNavigation = document.querySelector(".sidenav");
const openNavi = document.querySelector(".openbtn");
const closeNavi = document.querySelector(".closebtn");
const primaryHeader = document.querySelector(".header-container-mobile");

const mobileDownArrow = document.querySelector(".mobile-down-arrow");
const mobileDownArrowCompany = document.querySelector(
  ".mobile-down-arrow-company"
);
const mobileUpArrow = document.querySelector(".mobile-up-arrow");
const mobileUpArrowCompany = document.querySelector(".mobile-up-arrow-company");
const mobileMenuItems = document.querySelector(
  ".mobile-dropdown-menu-features"
);
const mobileMenuItemsCompany = document.querySelector(
  ".mobile-dropdown-menu-company"
);

openNavi.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "65%";
  primaryHeader.toggleAttribute("data-overlay");
});

closeNavi.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "0";
  primaryHeader.toggleAttribute("data-overlay");
});

mobileDownArrow.addEventListener("click", () => {
  mobileMenuItems.classList.add("open");
  mobileDownArrow.classList.add("close");
  mobileUpArrow.classList.add("open");
});

mobileUpArrow.addEventListener("click", () => {
  mobileMenuItems.classList.remove("open");
  mobileDownArrow.classList.remove("close");
  mobileUpArrow.classList.remove("open");
});

mobileDownArrowCompany.addEventListener("click", () => {
  mobileMenuItemsCompany.classList.add("open");
  mobileDownArrowCompany.classList.add("close");
  mobileUpArrowCompany.classList.add("open");
});

mobileUpArrowCompany.addEventListener("click", () => {
  mobileMenuItemsCompany.classList.remove("open");
  mobileDownArrowCompany.classList.remove("close");
  mobileUpArrowCompany.classList.remove("open");
});
