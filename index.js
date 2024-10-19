const activeButton = document.querySelector(".active-button");
console.log(activeButton);

const inactiveButton = document.querySelector(".inactive-button");
console.log(inactiveButton);

const activeWrapper = document.querySelector(".active-wrapper");
console.log(activeWrapper);

const inactiveWrapper = document.querySelector(".inactive-wrapper");
console.log(inactiveWrapper);

activeButton.addEventListener("click", toggleAccount);
inactiveButton.addEventListener("click", togglePassword);

function togglePassword() {
  inactiveButton.classList.add("active-button");
  inactiveButton.classList.remove("inactive-button");
  activeButton.classList.remove("active-button");
  activeButton.classList.add("inactive-button");
  inactiveWrapper.classList.add("active-wrapper");
  inactiveWrapper.classList.remove("inactive-wrapper");
  activeWrapper.classList.remove("active-wrapper");
  activeWrapper.classList.add("inactive-wrapper");
}
console.log(inactiveButton.className);

function toggleAccount() {
  if (inactiveButton.className == "active-button") {
    activeButton.classList.add("active-button");
    activeButton.classList.remove("inactive-button");
    inactiveButton.classList.remove("active-button");
    inactiveButton.classList.add("inactive-button");
    activeWrapper.classList.add("active-wrapper");
    activeWrapper.classList.remove("inactive-wrapper");
    inactiveWrapper.classList.remove("active-wrapper");
    inactiveWrapper.classList.add("inactive-wrapper");
  }
}
