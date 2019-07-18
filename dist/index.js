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
/* function init() {
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
} */
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLz0gc3JjL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci9oZWFkZXIuanNcclxuLyogZnVuY3Rpb24gaW5pdCgpIHtcclxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4nKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jyk7XHJcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xpc3QnKTtcclxuICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgaWNvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignaScpO1xyXG4gICAgaXNBY3RpdmUgPSAhaXNBY3RpdmU7XHJcbiAgICBpY29uLmNsYXNzTmFtZSA9IGlzQWN0aXZlID8gJ2ZhcyBmYS10aW1lcycgOiAnZmFzIGZhLWJhcnMnO1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgbmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBpY29uLmNsYXNzTmFtZSA9IGlzQWN0aXZlID8gJ2ZhcyBmYS10aW1lcycgOiAnZmFzIGZhLWJhcnMnO1xyXG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSAqLyJdLCJmaWxlIjoiaW5kZXguanMifQ==
