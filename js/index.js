require(["config"], function(){
	require(["jquery","template", "hf"], function($, template){
		// 利用模板渲染数据显示
		$.getJSON("mock/index.json", function(resData){
			var data = {
				products : resData.data
			};
		var html = template("product_list_template", data);
		$(".ff").html(html);
	});
	});
	// 轮播图
	require(["jquery","bootstrap"], function() {
		$(".carousel").carousel({ // 控制切换时间
   			 interval: 2000
		})
		$("#myCarousel").hover(function(){
			$(".carousel-control ").css({
				background:"blue",
				display : "block",
				position:"absolute",
				top :200
			});
		}, function(){
			$(".carousel-control").css({
				display : "none",
			});
		});
	});
	// 下拉列表(bug)
	require(["jquery"], function(){
		$(".typeLi").hover(function(){
			$(".List").css({background:"white"});
			$(".child").eq($(this).index()).css({display:"block"})
					   .parents(".typeLi")
					   .siblings("li")
					   .children(".child").hide();
		}, function(){
			$(".List").css({background:"none"});
			$(".child").eq($(this).index())
				       .css({display:"none"})
				       .parents(".typeLi")
				       .siblings("li")
				       .children(".child").hide();
		});
	});
	
});