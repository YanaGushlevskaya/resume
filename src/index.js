<script type="text/javascript">
document.addEventListener("DOMContentLoaded", init);

 $(document).ready(function(){
    $("#header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top }, 800);
    })
});

    $(window).scroll(function() {
      $("header").toggleClass("scroll", $(this).scrollTop() > 100)
    });
  </script>