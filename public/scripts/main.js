const msnry = new Masonry( '.grid', {
  itemSelector: '.grid-item',
  columnWidth: 285,
  gutter: 14
});

const imgSet1 = ["snap-1.jpg", "snap-2.jpg", "snap-3.jpg", "snap-4.jpg", "snap-5.jpg",
"snap-6.jpg", "snap-7.jpg", "snap-8.jpg", "snap-9.jpg", "snap-10.jpg", "snap-11.jpg"];
const imgSet2 = ["snap-12.jpg", "snap-13.jpg", "snap-14.jpg", "snap-15.jpg", "snap-16.jpg",
"snap-17.jpg", "snap-18.jpg", "snap-19.jpg", "snap-20.jpg", "snap-21.jpg", "snap-22.jpg"];

function changeImg(selected) {
  const bm = document.getElementsByClassName("btn-menu");
  const x = document.getElementsByClassName("grid-item");
  let toggleSet;
  (selected === 1)? toggleSet = imgSet1 : toggleSet = imgSet2;
  for (let i = 0, leng = x.length; i < leng; i++) {
    x[i].firstChild.setAttribute("src", "images/" + toggleSet[i]);
  }
  for (let i = 0, leng = bm.length; i < leng; i++) {
     bm[i].className = bm[i].className.replace(" current", "");
  }
  bm[selected-1].className += " current";

  const imgLoad = imagesLoaded(document.querySelector('.grid'));
  imgLoad.on('progress', function() {
    msnry.layout();
  });
}


let slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  const x = document.getElementsByClassName("slide-wrap");
  const dots = document.getElementsByClassName("dots");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (let i = 0, leng = x.length; i < leng; i++) {
     x[i].style.display = "none";
  }
  for (let i = 0, leng = dots.length; i < leng; i++) {
     dots[i].className = dots[i].className.replace(" sq-active", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " sq-active";
}
