function login_btn() { // 유효성 검사
	var uid = document.getElementById("uid");
	var pw = document.getElementById("pw");

	if (uid.value == "") {
		alert("아이디를 입력하세요.");
		return false;
	}
	if (pw.value == "") {
		alert("비밀번호을 입력하세요.");
		return false;
	}

	if (uid.value == "testuser1" && pw.value == "testuser1") {  // 테스트 계정 확인
		alert("로그인 되었습니다.")
		location.href = "multimall.html";
	}
	if (uid.value == "admin1" && pw.value == "admin1") { // 관리자 계정 확인
		alert("로그인 되었습니다.")
		location.href = "manager_home.html";
	}
}