function show() {
            sec.style.display = "block";
        };

function sho() {
            sect.style.display = "block";
        };

function btn1() {
    window.location = "field.html";
};

function btn2() {
    window.location = "skills.html";
};


function btn3() {
    window.location = "collaboration.html";
};



function btn4() {
    window.location = "works.html";
};

function btn5() {
    window.location = "work.html";
};

function btn6() {
    window.location = "profile.html";
};


function btn6() {
    window.location = "profile.html";
};

function btn7() {
    window.location = "https://www.linkedin.com";
};

function btn8() {
    window.location = "https://www.facebook.com";
};

function btn9() {
    window.location = "last.html";
};

function btn10() {
    window.location = "message2.html";
};

function btn11() {
    window.location = "message.html";
};

function btn12() {
    window.location = "index.html";
};
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
var sliIndex = 1;
showSlid(sliIndex);

// Next/previous controls
function plusSlid(l) {
  showSlid(sliIndex += l);
}

function currentSlid(l) {
  showSlid(sliIndex = m);
}

function showSlid(l) {
  var b;
  var slid = document.getElementsByClassName("mySlid");
  if (l > slid.length) {sliIndex = 1}
  if (l < 1) {sliIndex = slid.length}
  for (b = 0; b < slid.length; b++) {
      slid[b].style.display = "none";
  }

  slid[sliIndex-1].style.display = "block";
}

var slidIndex = 1;
showSlide(slidIndex);

// Next/previous controls
function plusSlide(m) {
  showSlide(slidIndex += m);
}

function currentSlide(m) {
  showSlide(slidIndex = m);
}

function showSlide(m) {
  var a;
  var slide = document.getElementsByClassName("mySlide");
  if (m > slide.length) {slidIndex = 1}
  if (m < 1) {slidIndex = slide.length}
  for (a = 0; a < slide.length; a++) {
      slide[a].style.display = "none";
  }

  slide[slidIndex-1].style.display = "block";
}
