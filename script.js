const burgerEl = document.querySelector('.nav__lang');
const menuEl = document.querySelector('.lang');
burgerEl.addEventListener("click", function () {
  menuEl.classList.toggle('lang_show');
});


var minOffset = 50;
window.onscroll = function() { 
  let has_class = document.body.classList.contains("is_scrolled");

  if (minOffset < document.documentElement.scrollTop ) {
    if (!has_class) {
        document.body.classList.add("is_scrolled");
    } 
  } else if (has_class) {
    document.body.classList.remove("is_scrolled")

  } 
}