src="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
crossorigin="anonymous"

// 글자수 제한 사용
$(document).ready(function() {

    var cnt = 10;
    $('#cnt').html(cnt);
    // 입력할 때마다 몇 글자 남았는지 체킹 
    $('#qna_reply').on('keyup', function(e){
        $('#cnt').html(--cnt);

        if(cnt < 1) {
            $(this).attr('readonly', 'readonly');
            cnt = 0;
            $('#cnt').html('');
            $('#cnt_text').html('더 이상 입력 불가능합니다.');
            $('#cnt_text').css("color", "red");

            // 글자수가 차면 새로 작성 버튼 생성 (append: 버튼이 여러개 생긴다, html: 버튼이 1개만 생긴다.)
            $('#newbtn_place').html('<button type="button" class="btn btn-outline-dark btn-sm"  id = "newbtn">새로 작성</button>');            

            // 새로 작성 버튼 누르기 
            $('#newbtn').on('click', function(){	
		          $('#qna_reply').val('');  // val: 입력값 삭제 
		          $('#qna_reply').removeAttr('readonly');
		          $('#qna_reply').focus();
	    	      cnt = 10;
		          $('#cnt').html(cnt);
		          $('#cnt_text').html("글자 입력 가능합니다");
		          $('#cnt_text').css("color", "black");
	        });
        };
    });

});

// 현재 창닫기
window.onload = function(){
    document.getElementById('close_btn').onclick = function(){
        self.close();
    }     
};    
