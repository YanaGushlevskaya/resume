<script type="text/javascript">
 $(document).ready(function(){
    $("#header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top }, 800);
    })
});
</script>