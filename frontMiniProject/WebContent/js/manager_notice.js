src="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
crossorigin="anonymous"


  window.onload = function(){
      var child;
      document.getElementById('qna_reply').onclick = function(){
          // var check_reply = document.querySelector('input[name="qna_check"]:checked').value;
          child = window.open('qna_reply.html', '고객센터 답변', "width = 800, height = 600, top = 0, left = 0");
      };
      
      // 자식창 닫기
      document.getElementById('qna_reply_close').onclick = function(){
          child.close();
      }
      
      /*document.getElementById('inquire').onclick = function(){
          child = window.open('inquire.html', '고객센터', "width = 1024, height = 768, top = 0, left = 0");
      }*/
  };

	

