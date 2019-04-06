// function that animates the jumping on nav links
$('.jumper').on('click', function(e) {
  e.preventDefault();
  $('body, html' ).animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 700);
});

// function that toggles the collaspsable nav bar links
function navFunction() {
  let x = document.getElementById("navLinkContainer");
  if (x.className === "navLinks") {
    x.className += " responsive";
  } else {
    x.className = "navLinks";
  }
} 
