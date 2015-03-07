jQuery(function($){
	//모바일 GNB 토글 버튼 
	var $gnbBtn = $(".gnb>button");

	$gnbBtn.on("click", function(){
		//$(".gnb>ul").slideToggle(200);
		$(this).next().slideToggle(200);

		if ( $gnbBtn.text() === "메뉴 열기" ){
			//메뉴 닫기 텍스트 표시
			$gnbBtn.text("메뉴 닫기")	
		} else {
			//메뉴 열기 텍스트 표시 
			$gnbBtn.text("메뉴 열기")
		} 
	});

	// 태블릿 + 데스크톱 GNB 메뉴
	$(".gnb>ul>li>a").on("mouseover focus", function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
});