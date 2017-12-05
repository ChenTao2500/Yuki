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
	});
		// 购物车
		require(["jquery", "cookie"], function(){
			$.cookie.json = true;
			// 购物开始,查询cookie里面保存的商品数组
			// 读取 cookie
			var _products = $.cookie("products") || [];
			if(_products.length === 0){
			$(".cart_body").html("<a href='list.html'><img style='margin-left:447px' src='../img/cart.png'/></a>");
//			$(".cart_body").html("<div class='.cart_datail'></div>");
			return;
		}
			// 显示商品数据
			var html = "";
			_products.forEach(function(prod){
				html += 
						`<div class = "row">
							<input type="hidden" class = "id", value="${prod.id}" />
							<div class="ck"><input type= "checkbox" class="ck_prod"/></div>
							<div class="img"><img src="${prod.img}"></div>
							<div class="name" title="${prod.title}">${prod.title}</div>
							<div class="price">${prod.price}</div>
							<div class="amount"><span class="minus"></span><input type="text" class="amount_val" value="${prod.amount}" size="1" /><span class="add"></span></div>
							<div class="youhui">暂无优惠</div>
							<div class="sub">${(prod.price*prod.amount).toFixed(2)}</div>
							<div class="oper"><a class="del" href="javascript:void(0);">删除</a></div>
						</div>`;
			});
			
			$(".cart_body").html(html);
			$(".cart_body").click(function(e){
				e = e || event;
				var src = e.target || e.srcElement;
				// 删除商品
				if(src.className === "del"){
					if(confirm("您确定要删除吗？")){
					// 获取删除链接所在行
					var _row = src.parentNode.parentNode;
					
					var _id = $(_row).children(".id").val(); // 商品 id
					var index = exist(_id, _products); // 商品下标
					
					_products.splice(index, 1); // 从数组中删除元素
					
					$.cookie("products", _products, {expires:7,path:"/"}); // 将数组结构覆盖保存回 cookie 中
	
					$(_row).remove(); // 从DOM结构中删除行
					
					if(_products.length === 0){
						$(".cart_body").html("<a href='list.html'><img style='margin-left:293px' src='../img/cartt.png'/></a>");
					}
				}
				}
			});
			
			// 全选功能
				$("#ck_all").click(function(){
					$(".cart_body .ck_prod").prop("checked",$(this).prop("checked"));
				});
			// 解除全选
				$(".ck_prod").click(function(){
					if($(".cart_body .ck_prod:checkbox").length === $(".cart_body .ck_prod:checked").length)
						$("#ck_all").prop("checked", true);
					else
						$("#ck_all").prop("checked", false);
				});
			// 数量加和数量减
			$(".cart_body").on("click", ".minus, .add", function(){
				var _row = $(this).parents(".row");
				var _id = 
			});
			
			
			
			
			
			
			
			
			
			// 指定id的商品在所有已选购的数组中是否存在
		// 存在则返回其在数组中的下标，不存在返回-1
		function exist(id, products) {
			for (var i = 0; i < products.length; i++) {
				if (products[i].id == id)
					return i;
			}
			return -1;
		}
		});
});