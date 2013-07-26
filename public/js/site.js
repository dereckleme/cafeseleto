$(document).ready(function(){
	//Player->
	var musica = document.getElementById("musica");
	var canalOff = 0;
	$(".playMusica,.abrirMusica").on("click",function(){
			if(musica.currentTime == 0)
			{
				musica.play();
			}			
			else 
			{
				if(canalOff ==0)
					{
						musica.pause();	
						canalOff=1;
					}
					else
					{
						canalOff=0;
						musica.play();
					}
			}
					return false;
				})
				
				
	$(".nossaMusica,.abrirMusica").on("click",function(){
		$(".download_musica").toggle();
		return false;
		})	
	$(".baixeMusica").on("click",function(){
		$(".monstrarDownloads").toggle();
		return false;
		})		
		
	$(".stopMusica").on("click",function(){
		musica.currentTime = 0;
		musica.pause();
		return false;
	})

	//--->
	$(".btn_produtos").on("click",function(){
		 $("#produtos").slideToggle();
		return false;
	});
	var DivCafes = $(".nossos_cafes").html();
	var DivAlimentos = $(".nossos_alimentos").html();
	$("#col_esquerda").on("click",function(){
		$(".slide_ul").animate({left:"-=1024"}, 500,function(){
			var li = $(".slide_ul li:first").clone();
			$(".slide_ul li:first").remove();
			$('.slide_ul').css({'left' :"+=1024"});
			$(".slide_ul").append(li);
			});
		return false;
	});
	$("#col_direita").on("click",function(){
			$(".slide_ul").animate({left:"+=1024"}, 500,function(){
			var li = $(".slide_ul li:last").clone();
			$(".slide_ul li:last").remove();
			$('.slide_ul').css({'left' :"-=1024"});
			$(".slide_ul").prepend(li);
		});
		return false;
	});
	$(".nextEsquerda").on("click",function(){
			
			$(".nossos_alimentos").animate({left:"-=960"}, 500,function(){
			var li = $(".nossos_alimentos li:first").clone();
			$(".nossos_alimentos li:first").remove();
			$('.nossos_alimentos').css({'left' :"+=960"});
			$(".nossos_alimentos").append(li);
			});
			$(".nossos_cafes").animate({left:"-=960"}, 500,function(){
			var li = $(".nossos_cafes li:first").clone();
			$(".nossos_cafes li:first").remove();
			$('.nossos_cafes').css({'left' :"+=960"});
			$(".nossos_cafes").append(li);
			});
			return false;
	});
	$(".nextDireita").on("click",function(){
			
			$(".nossos_alimentos").animate({left:"+=960"}, 500,function(){
			var li = $(".nossos_alimentos li:last").clone();
			$(".nossos_alimentos li:last").remove();
			$('.nossos_alimentos').css({'left' :"-=960"});
			$(".nossos_alimentos").prepend(li);
		});
			$(".nossos_cafes").animate({left:"+=960"}, 500,function(){
			var li = $(".nossos_cafes li:last").clone();
			$(".nossos_cafes li:last").remove();
			$('.nossos_cafes').css({'left' :"-=960"});
			$(".nossos_cafes").prepend(li);
		});
			return false;
	});
	$(".txt_cafe").on("click",function(){
	$(".detalhe_slider").animate({left:"140"}, 200,function(){
		$(".nossos_alimentos").fadeOut(function(){	
			$(".nossos_cafes").css("left:-960px");
			$(".nossos_cafes").html(DivCafes);
			$(".nossos_cafes").fadeIn();
		});
	});
	return false;
	});
	$(".txt_alimentos").on("click",function(){
		$(".detalhe_slider").animate({left:"438"}, 200,function(){
			$(".nossos_cafes").fadeOut(function(){
			$(".nossos_alimentos").css("left:-960px");
			$(".nossos_alimentos").html(DivAlimentos);
			$(".nossos_alimentos").fadeIn();
			});
		});
		
	return false;
	});
	
	//Definimos que todos as tags dd terão display:none menos o primeiro filho
	$('#container_linhadotempo div.container:not(:first)').hide();
	//Ao clicar na li, executamos a funcão
	$('.menu_data li').click(function(){
		//Pegamos em que posicao estamos
		var posicao = $(this).attr('tabindex');
		var divAtiva = $("#container_linhadotempo div.container:visible").attr('tabindex');
		
		if(posicao != divAtiva){		
			//Pegamos o valor no atributo value da tag li
			var abrir = $(this).attr('value').split("!");
			//As tags div's com class container visíveis agora ficam com display:none
			$("#container_linhadotempo div.container:visible").slideUp("slow");
			//Após, a funcão abaixo abre a div com o id que pegamos e guardamos na variavel abrir
			$("#container_linhadotempo div#"+abrir[1]).slideDown("slow");
		}
		return false;
	});
	
	
});