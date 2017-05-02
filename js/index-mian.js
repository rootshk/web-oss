// JavaScript Document
$( document ).ready(function(){
			$(".button-collapse").sideNav();
			$('.parallax').parallax();
			$('.paralla').paralla();
			$('.collapsible').collapsible();
			$('ul.tabs').tabs();
			$('.dropdown-button').dropdown();
			$('.scrollspy').scrollSpy();
			$('.modal').modal();
			
		})
		$(window).scroll(function(){
			if($(window).scrollTop()>=900){
				$(".b0c").addClass(	//页面在顶部900px时增加类(此处为改变颜色和选中状态)
					"#4db6ac teal lighten-2"//颜色改为绿色
				)
				$(".activethis").addClass(
					"active"//标签改为选中状态
				)
			}else{
				$(".b0c").removeClass(	//否则删除类
					"#4db6ac teal lighten-2"
				)
				$(".activethis").removeClass(
					"active"
				)
			}
		})
		$('#dow1').click(function(){ 
			$('html,body').animate({
				scrollTop:$('#b1c').offset().top
			}, 2000); //点击后线性移动到指定位置
		});
		$('#up1').click(function(){ 
			$('html,body').animate({
				scrollTop:$('#up2').offset().top
			}, 2000); 
		});
		$('#up0').click(function(){ 
			$('html,body').animate({
				scrollTop:$('#up2').offset().top
			}, 2000); 
		});