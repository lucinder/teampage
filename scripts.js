function simonsFunction() {
  for (var i = 0; i <= 12; i++) {
    if (i % 2 == 0) {
      alert(i);
    }
  }
}
//Kwun add a random game picker here
let btnRandom = document.querySelector("#buttonpick");
let result = document.querySelector("#randompicker");
let users = ["Splatoon 2", "Valorant", "Hollow Knight", "Mother 3"];
function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

btnRandom.addEventListener("click", () => {
  let index = getRandomNumber(0, users.length - 1);
  if (users[index] == "Splatoon 2") {
    selectSplatoon();
  } else if (users[index] == "Valorant") {
    selectValorant();
  } else if (users[index] == "Hollow Knight") {
    selectHollowKnight();
  } else {
    selectMother3();
  }
  result.innerText = users[index];
});

function selectSplatoon() {
  $("html, body").animate({
    scrollTop: $("#splatoon").offset().top,
  });
}

function selectValorant() {
  $("html, body").animate({
    scrollTop: $("#valorant").offset().top,
  });
}

function selectHollowKnight() {
  $("html, body").animate({
    scrollTop: $("#hollowKnight").offset().top,
  });
}

function selectMother3() {
  $("html, body").animate({
    scrollTop: $("#mother3").offset().top,
  });
}
//end of kwun's edit
