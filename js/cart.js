require(["config"], function(){
	require(["jquery","template", "load"], function($,template){
		// 模拟数据部分
		$.getJSON("../mock/like.json", function(Data){
			var datas = {
				likes : Data.likes
			}
			var html1 = template("product_like", datas);
			$(".likes").html(html1);
		});
		// 购物开始
	});
});