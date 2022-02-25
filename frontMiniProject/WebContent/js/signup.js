function btn(e) { // 유효성 검사
	var uid = document.getElementById("uid");
	var email = document.getElementById("email");
	var pw = document.getElementById("pw");
	var repwd = document.getElementById("repwd");
	var birthday = document.getElementById("birthday");
	var address = document.getElementById("address");
	var mobile = document.getElementById("mobile");

	if (uid.value == "") {
		alert("아이디를 입력하세요.");
		e.preventDefault();
		return false;
	}
	if (email.value == "") {
		alert("이메일을 입력하세요.");
		e.preventDefault();
		return false;
	}
	if (pw.value == "") {
		alert("비밀번호을 입력하세요.");
		e.preventDefault();
		return false;
	}
	
	var pwdCheck = /^(?=.*[a-z])(?=.*[0-9]).{6,12}$/; // 정규식 표현 a-z 0~9 까지 사용가능
	
	if (!pwdCheck.test(pw.value)){
		alert("비밀번호는 영문자+숫자 조합으로 6-12자리를 사용해야 합니다.");
		e.preventDefault();
		return false;
	}
	
	if (pw.value !== repwd.value) {
		alert("비밀번호가 일치하지않습니다.");
		e.preventDefault();
		return false;
	}
	if (birthday.value == "") {
		alert("생년월일을 입력하세요.");
		e.preventDefault();
		return false;
		
	}
	if (address.value == "") {
		alert("주소를 입력하세요.");
		e.preventDefault();
		return false;
	}
	if (mobile.value == "") {
		alert("전화번호를 입력하세요.");
		e.preventDefault();
		return false;
	}
	alert('가입이 완료되었습니다.');
	/*location.href = "login.html";*/
	/*document.getElementById()*/

} 