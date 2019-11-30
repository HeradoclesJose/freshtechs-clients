$( document ).ready(function() {
// HEADER
// MOVILE SIDE NAVBAR
    $(".button-collapse").sideNav({
        menuWidth: 280, // Default is 300
        edge: 'right',
        closeOnClick: true,
        draggable: true
    });
 
// CAROUSEL HOME
    $(".carousel.carousel-slider").carousel({
        fullWidth: true,
        duration: 100
    });

    $(".carousel-left-arrow a").click(function(){
        $('.carousel.carousel-slider').carousel('prev');
    });

    $(".carousel-right-arrow a").click(function(){
        $('.carousel.carousel-slider').carousel('next');
    });

    setInterval(function () {
      $('.carousel.carousel-slider').carousel('next');
    }, 4000);


// SCROLLSPY
    $('.scrollspy').scrollSpy({
        scrollOffset:64
    });
    
// IM A TOAST
//CONTROL DE MENSAJE

    var $name = $("#name");
    var $email = $("#email");
    var $cellphone = $("#cellphone");
    var $servicio = $("#servicio");
    var $empresa = $("#empresa");
    var $direccion = $("#direccion");
    
    $("#sendMail").click(function(){

        if($name.val()==""){
            $name.css({"border":"solid 1px red"});
        }
        if($email.val()==""){
            $email.css({"border":"solid 1px red"});
        }
        if($cellphone.val()==""){
            $cellphone.css({"border":"solid 1px red"});
        }
        if($servicio.val()==""){
            $servicio.css({"border":"solid 1px red"});
        }
        if($empresa.val()==""){
            $empresa.css({"border":"solid 1px red"});
        }
        if($direccion.val()==""){
            $direccion.css({"border":"solid 1px red"});
        }

        if(($name.val()=="") || ($email.val()=="") || ($cellphone.val()=="") || ($servicio.val()=="") || ($empresa.val()=="") || ($direccion.val()=="")){
            $(".hideb-2").addClass("show");
        }else{
            $(".hideb-2").removeClass("show");
            $(".hideb").addClass("show");
            $("#sendMail").addClass("disabled");
        }
    });

//HOVER
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
});
