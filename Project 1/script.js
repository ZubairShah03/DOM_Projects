const istatus = document.querySelector("h5");

const btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag === 0) {
    istatus.textContent = "Friend";
    istatus.style.color = "green";
    btn.textContent = "Remove Friend";
    btn.style.backgroundColor = "crimson";
    flag = 1;
  } else {
    istatus.textContent = "Stranger";
    istatus.style.color = "red";
    btn.textContent = "Add Friend";
    btn.style.backgroundColor = "cadetblue";
    flag = 0;
  }
});
