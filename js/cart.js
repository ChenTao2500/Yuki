require(["config"], function(){
	require(["jquery","template", "load", "cookie"], function($,template){
		// 模拟数据部分
		$.getJSON("../mock/like.json", function(Data){
			var datas = {
				likes : Data.likes
			}
			var html1 = template("product_like", datas);
			$(".likes").html(html1);
		});
		// 购物开始,查询cookie里面保存的商品数组
		// 读取 cookie
		var _products = cookie("products");
		if( !_products) // 判断，cookie 里面没有商品，就创建一个空数组，
			_products =  [];
		else // 否则解析商品数据
			_products.JSON.parse(_products);
		// 如果购物车里面没有任何商品，跳转到商品列表里面选购商品
		if(_products.length === 0)
			location = "list.html";
			
		// 显示商品数据
		var html = "";
		_products.forEach(function(prod){
			html += 
					`<div class = "row">
						<input type="hidden" class = "id", value="${prod.id}" />
						<div class="ck"><input type= "checkbox" class="ck_prod"/></div>
						<div class="img"><img src="${prod.img}"></div>
						<div class="name">${prod.title}</div>
						<div class="price">${prod.price}</div>
						<div class="amount"><span class="minus"></span><input type="text" class="amount_val" value="${prod.amount}" size="1" /><span class="add">+</span></div>
						<div class="sub">${(prod.price*prod.amount).toFixed(2)}</div>
						<div class="oper"><a class="del" href="javascript:void(0);">删除</a></div>
					</div>`;
		});
		$("")
	});
});