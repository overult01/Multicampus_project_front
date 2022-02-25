src="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
crossorigin="anonymous"


type="text/javascript"> // 상품 삭제(수정필요), 새창에 테이블 값 넘겨주기
$(document).ready(function() {

  // 상품 등록
  var id = 0;
  $("#product_enroll").on('click', function(){
      ++id;
      var name = $("#product_enroll_name").val();
      var category = $("#product_enroll_category").val();
      var cnt = $("#product_enroll_cnt").val();
      var sell = "yes";
      var date = new Date();
      var today = date.toLocaleString();
      var hotitem	= "no";	

      alert("상품등록이 되었습니다.");

      $("#product_list").append('<tr><td><input type = "checkbox" name = "product_check" value="'+ id + '"></td><td>' +id+'</td><td>' +category+'</td><td>'  + name+'</td><td>' + cnt+'</td><td>' + sell+'</td><td>' + today + '</td><td>' + hotitem + '</td><br>');
  });


});

  // 체크박스 전체선택, 전체 해제 함수
  function selectAll(selectAll)  {
      const checkboxes = document.getElementsByName('product_check');
      
      alert(checkboxes.length-1 + "개 선택 되었습니다.");
      
      checkboxes.forEach((checkbox) => {
          checkbox.checked = selectAll.checked;})
  };

  // 체크박스 선택된 것들의 상품 id를 배열에 담는 함수
  function getChecked() {
      const checkedproducts = document.querySelectorAll('input[name="product_check"]:checked');
      let checked_ids = [];
      checkedproducts.forEach((id) => {
          if(id.value != 0) {
              checked_ids.push(id.value);
          }
      })
      return checked_ids;
  }

  window.onload = function(){
      // 상품 삭제하기
      document.getElementById("product_delete").onclick = function(){
          // checked_ids에 체크된 상품 id담아오는 함수
          var checked_ids = getChecked();
          var index; // 삭제할 테이블 인덱스. 추가필요. 현재는 1개만 삭제 가능.
          if(confirm("정말로 상품번호 "+ checked_ids + "를 삭제하시겠습니까?")){
              checked_ids.forEach((id) => {					
                  document.getElementById('table').deleteRow(id);
              })
          }
          else {
              alert("삭제를 취소하셨습니다.")
          }

      }

  }; // end: window	
