const container = document.querySelector(".container");
const like = document.querySelector("i");

container.addEventListener("dblclick", function (e) {
  like.style.transform = "translate(-50%, -50%) scale(1)";
  like.style.opacity = "0.8";

  setTimeout(function () {
    like.style.transform = "translate(-50%, -50%) scale(0)";
    like.style.opacity = "0";
  }, 1000);
  //   setTimeout(function () {
  //   }, 1000);
});
