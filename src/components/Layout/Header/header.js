function init() {
  const menuBtn = document.querySelector('.nav-btn');
  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav__list');
  let isActive = false;

  menuBtn.addEventListener('click', function() {
    const icon = this.querySelector('i');
    isActive = !isActive;
    icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
    nav.classList.toggle('active');
    navList.addEventListener('click', function() {
      isActive = false;
      icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
      nav.classList.remove('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', init);

$(document).ready(function() {
  $('#header').on('click', 'a', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
  });
});

$(window).scroll(function() {
  $('header').toggleClass('scroll', $(this).scrollTop() > 100);
});
