require(["config"], function(){
	require(["jquery", "load"], function(){
		
		// 验证码
		function loadCode(){
		   var url = "http://route.showapi.com/932-2?showapi_appid=48344&showapi_sign=09168fc73b1748ea9fc1f278a590cb83&length=4&specials=false&";
			$.getJSON(url, {}, function(data){
				var resData = data.showapi_res_body;
				$(".content").attr("src", resData.image);
				$(".content").attr("sid", resData.sid);
			});
		}
		// 调用
		$(".codes").on("click", function(){ // 给 “换一个” 绑定点击事件
			loadCode();
		});
		
		// 验证有效性
		$(".code").blur(function(){
			var url = "http://route.showapi.com/932-1?showapi_appid=48344&showapi_sign=09168fc73b1748ea9fc1f278a590cb83&checkcode="+$(".code").val()+"&sid="+$(".content").attr("sid");
			$.getJSON(url, {}, function(data){
				if(data.showapi_res_body.valid){
					$(".codes").text("验证通过");
					console.log("succe")
				}else{
					$(".codes").text("验证错误");
					console.log("error")
				}
			});
		});
		loadCode(); // 调用加载验证码方法
	});
});
