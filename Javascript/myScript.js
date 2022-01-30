var allImages = Array.from(document.querySelectorAll(".item img")),
  lightBox = document.getElementById("lightBox"),
  lightBoxImage = document.getElementById("lightBoxImage"),
  currentIndex,
  closeBtn = document.getElementById("close"),
  nextBtn = document.getElementById("next");
prevBtn = document.getElementById("prev");
for (let i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener("click", function (e) {
    lightBox.classList.replace("d-none", "d-flex");
    currentIndex = allImages.indexOf(e.target);
    var getImageSrc = e.target.getAttribute("src");
    lightBoxImage.style.backgroundImage = `url(${getImageSrc})`;
  });
}

closeBtn.addEventListener("click", function () {
  close();
});
function close() {
  lightBox.classList.replace("d-flex", "d-none");
}
document.addEventListener("keydown", function (e) {
  if (e.code == "Escape") {
    close();
  }
});
// nextBtn.addEventListener("click", function () {
//   currentIndex++;
//   if (currentIndex == allImages.length) {
//     currentIndex = 0;
//   }
//   var nextImageSlide = allImages[currentIndex].src;
//   lightBoxImage.style.backgroundImage = `url(${nextImageSlide})`;
// });

// prevBtn.addEventListener("click", function () {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = allImages.length - 1;
//   }
//   var nextImageSlide = allImages[currentIndex].src;
//   lightBoxImage.style.backgroundImage = `url(${nextImageSlide})`;
// });

nextBtn.addEventListener("click", function () {
  slide(1);
});
prevBtn.addEventListener("click", function () {
  slide(-1);
});

function slide(flag) {
  currentIndex = currentIndex + flag;
  if (currentIndex < 0) {
    currentIndex = allImages.length - 1;
  } else {
    if (currentIndex == allImages.length) {
      currentIndex = 0;
    }
    var nextImageSlide = allImages[currentIndex].src;
    lightBoxImage.style.backgroundImage = `url(${nextImageSlide})`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.target == "27") {
    lightBoxImage.style.backgroundImage = `url(${nextImageSlide})`;
  }
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (e.code == "ArrowRight") {
    slide(1);
  }
  if (e.code == "ArrowLeft") {
    slide(-1);
  }
  if (e.code == "F12") {
    e.preventDefault();
  }
});
