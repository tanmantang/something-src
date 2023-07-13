$(function(){
	$('a[href*=\\#]:not([href=\\#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				if($(this).parents('.menuBox').length){
					setTimeout(function(){
						var targetOffset = $target.offset().top;
						$('html,body').animate({scrollTop: targetOffset}, 1000);
					},100);
				}else{
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 1000);
				}
				return false;
			}
		}
	});
	
    var pcflag,spflag;
	if(window.innerWidth > 896){
		pcflag = 1;
		spflag = 0;
	}else{
		pcflag = 0;
		spflag = 1;
	}
	
	$(window).resize(function(){
		if(window.innerWidth < 897){
			if(pcflag){    
				setTimeout(function(){window.location.reload()},100);
				pcflag = 0;
				spflag = 1;
			}
		}else{
			if(spflag){   
				setTimeout(function(){window.location.reload()},100);
				pcflag = 1;
				spflag = 0;
			}
		}
	});
    
	$(window).scroll(function(){
		$('.fadeInDown').each(function(){
			if($(window).scrollTop() > $(this).offset().top - $(window).height()*0.2){
				$(this).addClass("on");
			}
		});
		if(window.innerWidth > 896){
			$('.fadeInUp').each(function(){
				if($(window).scrollTop() > $(this).offset().top - $(window).height()/2){
					$(this).addClass("on");
				}
			});
		}else {
			$('.fadeInUp').each(function(){
				if($(window).scrollTop() > $(this).offset().top - $(window).height()){
					$(this).addClass("on");
				}
			});
		}
	}).trigger("scroll");

	var state = false;
	var scrollpos;
	$('.menu').on('click', function(){
		if(state == false) {
			scrollpos = $(window).scrollTop(); 
			$('body').addClass('fixed').css({'top': -scrollpos}); 
			$('.menuBox').stop().slideToggle(function(){
				$('.menuBox .spNavi li a').addClass('on');
			});
			$('.menu').addClass('on');
			
			
			state = true;
		} else {
			$('body').removeClass('fixed').css({'top': 0});
			window.scrollTo( 0 , scrollpos ); 
			$('.menuBox').stop().slideToggle(function(){
				$('.menuBox .spNavi li a').removeClass('on');
			});
			$('.menu').removeClass('on');
			
			state = false;
		}
		return false;
	});
	
	$('.menuBox .spNavi li a').click(function(){
		$('body').removeClass('fixed').css({'top': 0});
		window.scrollTo( 0 , scrollpos ); 
		$('.menuBox').stop().slideToggle(function(){
			$('.menuBox .spNavi li a').removeClass('on');
		});
		$('.menu').removeClass('on');

		state = false;
	});
	
});

$(window).on('load',function(){
	var localLink = window.location+'';
	if(localLink.indexOf("#") != -1 && localLink.slice(-1) != '#'){	
		localLink = localLink.slice(localLink.indexOf("#")+1);
		$('html,body').animate({scrollTop: $('#'+localLink).offset().top}, 500);
	}
});