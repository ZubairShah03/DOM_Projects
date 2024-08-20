const slides = document.querySelectorAll(".slide");
// const pics = document.querySelectorAll(".pic");

slides.forEach(function (val) {
  val.addEventListener("mousemove", function (e) {
    val.childNodes[1].style.left = `${e.x}px`;
    val.childNodes[1].style.top = `${e.y}px`;
  });
  val.addEventListener("mouseenter", function (e) {
    val.childNodes[1].style.opacity = 1;
    console.log("Entered");
  });
  val.addEventListener("mouseleave", function (e) {
    val.childNodes[1].style.opacity = 0;
    console.log("leaved");
  });
});
