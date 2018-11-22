(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})
		
        
        /* ---------------------------------------------- /*
		 * Skills
        /* ---------------------------------------------- */    
        //var color = $('#home').css('backgroundColor');

        $('.frontend-skills').waypoint(function(){
            $('.frontend-chart').each(function(){
            $(this).easyPieChart({
                    size:100,
                    animate: 2000,
                    lineCap:'round',
                    scaleColor: false,
                    barColor: '#FF5252',
                    trackColor: '#a5b0a8',
                    lineWidth: 10
                });
            });
        },{offset:'80%'});

		$('.backend-skills').waypoint(function(){
			$('.backend-chart').each(function(){
				$(this).easyPieChart({
					size:100,
					animate: 2000,
					lineCap:'round',
					scaleColor: false,
					barColor: '#0066CC',
					trackColor: '#a5b0a8',
					lineWidth: 10
				});
			});
		},{offset:'80%'});

		$('.other-skills').waypoint(function(){
			$('.other-chart').each(function(){
				$(this).easyPieChart({
					size:100,
					animate: 2000,
					lineCap:'round',
					scaleColor: false,
					barColor: '#fac22a',
					trackColor: '#a5b0a8',
					lineWidth: 10
				});
			});
		},{offset:'80%'});

		$('.frontend-more-button').click(function(){
			$('.frontend-skills-more').waypoint(function(){
				$('.frontend-more-chart').each(function(){
					$(this).easyPieChart({
						size:100,
						animate: 2000,
						lineCap:'round',
						scaleColor: false,
						barColor: '#FF5252',
						trackColor: '#a5b0a8',
						lineWidth: 10
					});
				});
			},{offset:'80%'});
		});

		$('.backend-more-button').click(function(){
			$('.backend-skills-more').waypoint(function(){
				$('.backend-more-chart').each(function(){
					$(this).easyPieChart({
						size:100,
						animate: 2000,
						lineCap:'round',
						scaleColor: false,
						barColor: '#0066CC',
						trackColor: '#a5b0a8',
						lineWidth: 10
					});
				});
			},{offset:'80%'});
		});

	        /* ---------------------------------------------- /*
		 * Quote Rotator
		/* ---------------------------------------------- */
       
			$( function() {
				/*
				- how to call the plugin:
				$( selector ).cbpQTRotator( [options] );
				- options:
				{
					// default transition speed (ms)
					speed : 700,
					// default transition easing
					easing : 'ease',
					// rotator interval (ms)
					interval : 8000
				}
				- destroy:
				$( selector ).cbpQTRotator( 'destroy' );
				*/

				$( '#cbp-qtrotator' ).cbpQTRotator();

			} );
		
        
		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();


		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').submit(function(e) {

			e.preventDefault();

			var c_name = $('#c_name').val();
			var c_email = $('#c_email').val();
			var c_message = $('#c_message').val();
			var c_name_error = $('#c_name_error');
			var c_email_error = $('#c_email_error');
			var c_message_error = $('#c_message_error');
			var response_ok = $('#contact-form .ajax-response-ok');
			var response_fail = $('#contact-form .ajax-response-fail');

			//Clean form errors
			c_name_error.html('');
			c_email_error.html('');
			c_message_error.html('');
			response_ok.html('');
			response_fail.html('');

			if (( c_name== '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email) )) {
				if (c_email=='') { 
					c_email_error.fadeIn(500);
					if (window.location.search.substring(1).split("=")[0] == 'lng') {
						c_email_error.html('<i class="fa fa-warning"></i><em>Email</em> es un campo obligatorio.');	
					} else {
						c_email_error.html('<i class="fa fa-warning"></i><em>Email</em> is a required field.');	
					}
					
				} else if (!isValidEmailAddress(c_email)) { 
					c_email_error.fadeIn(500);
					if (window.location.search.substring(1).split("=")[0] == 'lng') {
						c_email_error.html('<i class="fa fa-warning"></i>Por favor introduzca un email válido');	
					} else {
						c_email_error.html('<i class="fa fa-warning"></i>Please enter a valid email');	
					}
				}
				if (c_name=='') {
					c_name_error.fadeIn(500);
					if (window.location.search.substring(1).split("=")[0] == 'lng') {
						c_name_error.html('<i class="fa fa-warning"></i><em>Nombre</em> es un campo obligatorio.');	
					} else {
						c_name_error.html('<i class="fa fa-warning"></i><em>Name</em> is a required field.');	
					}
				}
				if (c_message=='') {
					c_message_error.fadeIn(500);
					if (window.location.search.substring(1).split("=")[0] == 'lng') {
						c_message_error.html('<i class="fa fa-warning"></i><em>Mensaje</em> es un campo obligatorio.');	
					} else {
						c_message_error.html('<i class="fa fa-warning"></i><em>Message</em> is a required field.');	
					}
				}
				response_fail.fadeIn(500);
				if (window.location.search.substring(1).split("=")[0] == 'lng') {
					response_fail.html('<i class="fa fa-warning"></i>Por favor, corriga los errores e inténtelo de nuevo.');	
				} else {
					response_fail.html('<i class="fa fa-warning"></i>Please fix the errors and try again.');	
				}
			}

			else {				
					//Send POST to PHP server file to send email
			        $.ajax({
			            data: {"action":"sendmail", "name": c_name, "email":c_email, "message":c_message},
			            type: "POST",
			            dataType: "json",
			            url: 'assets/php/handleFormSubmit.php'
			        })
			            .done(function( data, textStatus, jqXHR ) {
					console.log(data);
			                if (data.sendstatus == 0){
			                    response_fail.fadeIn(500);
			                    if (window.location.search.substring(1).split("=")[0] == 'lng') {
									response_fail.html('<i class="fa fa-warning style="margin-right:10px""></i>Error al enviar el email, por favor inténtelo de nuevo.');
								} else {
									response_fail.html('<i class="fa fa-warning" style="margin-right:10px"></i>Error sending email, please try again.');
								}
			                } else {
			                    $('#contact-form .ajax-hidden').fadeOut(500);
				    			if (window.location.search.substring(1).split("=")[0] == 'lng') {
									response_ok.html('<i class="fa fa-check" style="margin-right:10px"></i>Mensaje enviado. Gracias por su interés.').fadeIn(500);
								} else {
									response_ok.html('<i class="fa fa-check"i style="margin-right:10px"></i>Message Sent. I will contact you asap. Thanks.').fadeIn(500);
								}
			                }
			            })
			            .fail(function( jqXHR, textStatus, errorThrown ) {
					console.log(jqXHR, textStatus, errorThrown);
			               	response_fail.fadeIn(500);
							if (window.location.search.substring(1).split("=")[0] == 'lng') {
								response_fail.html('<i class="fa fa-warning"></i>Error al enviar el email, por favor inténtelo de nuevo.');	
							} else {
								response_fail.html('<i class="fa fa-warning"></i>Error sending email, please try again.');	
							}
			            });
				}
            	return false;
			});

		/*  POPOVERS */
		$(function () {
			$('[data-toggle="popover"]').popover({
				html: true
			})
		});

		/* Manage links */
		$('a').each(function(){
			var href = $(this).attr('href');
			if (href && href.match('my-custom-dns')){
				href = href.replace('my-custom-dns',window.location.host);
				$(this).attr('href',href);
			}
		});
	});

})(jQuery);
