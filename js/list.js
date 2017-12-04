require(["config"], function(){
	require(["jquery","template","load","fly"], function($,template){
		// 利用模板渲染数据商品列表
		$.getJSON("../mock/list.json", function(resData){
			var data = {
				lists : resData.data  //key value键值对形式，key必须和html页面的each 后的对象一致
			}
			var html = template("product_list", data);
			$(".box").html(html);
		});
		// 利用模板渲染猜你喜欢处商品
		$.getJSON("../mock/like.json", function(Data){
			var datas = {
				likes : Data.likes
			}
			var html1 = template("product_like", datas);
			$(".s").html(html1);
		});
		// 添加购物车
		$(".box").on("click", ".part1", function(e){ // 时间委派
			var pro = $(this);
			console.log(pro)
		});
	});
});