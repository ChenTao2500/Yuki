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
			var product = { // 将商品信息装进一个对象
				id : pro.children(".id").val(), // 商品 id
				title : pro.children(".title").text(), // 商品名称
				price : pro.children(".price").text(), // 商品价格
				img : pro.find(".img").attr("src"), // 商品图片
				amount : 1, // 
			}
			$.cookie.json = true; // cookie操作
			// 将 cookie 里面的商品读取出来
			var _products = $.cookie("products") || [];
			// 当前商品是否已经被选购过
			var index = isExist(product.id, _products);
			if(index !== -1) // 存在
				_products[index].amount++;
			else
				_products.push(product);
			// 重新存回 cookie
			$.cookie("products", _products, {expires:7, path:"/"});
		});
		// 商品是否被选中的函数判断
			function isExist(id, products){
				for (var i = 0, len = products.length; i < len; i++) {
					if(products[i].id === id)
						return i;
				}
					return -1
			}
	});
});