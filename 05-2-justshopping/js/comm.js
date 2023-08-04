$(function () {
  // modal

  // 변수는 이 안에서만 사용가능
  const modalWrap = $("#modal");
  const modalBtn = modalWrap.find("button");
  const listbbsEl = $(".lst-bbs li:first-child");

  $("#modal").removeClass("active");
  // .lst-bbs li:first-child 를 클릭했을 때
  listbbsEl.on("click", function () {
    // #modal에 클래스 active를 추가
    modalWrap.addClass("active");
  });
  // modal 닫기
  // #modal button 을 클릭했을 때
  modalBtn.on("click", function () {
    modalWrap.removeClass("active");
  });

  // tabs
  const tabEl = $(".tab-item");
  const tabTit = tabEl.find(".tit");
  // .tab-item 옆에 .on 클래스를 삭제
  tabEl.removeClass("on");
  // 클릭했을 때 on 클래스가 나오게
  tabEl.first().addClass("on");
  // .tab-item .tit 을 클릭했을 때
  tabTit.on("click", function () {
    // .tab-item 에 붙어있는 on을 먼저 삭제
    tabEl.removeClass("on");
    // 방금 클릭한 나(this)의 부모(parent())에게 .on 추가
    $(this).parent().addClass("on");
  });

  // slide
  let now = 1;
  const slideEls = $(".lst-slide");
  let height = 100;

  // 3초마다 실행
  setInterval(function () {
    slide();
  }, 3000);

  function slide() {
    console.log("dd");
    // .lst-slide를 애니메이션(top: -300px)
    // 처음에는 -100%였다가 3초 후에 -200%가 되게

    // 변수 재선언

    // 조건문
    // now : 0 - 첫번째 슬라이드
    // now : 1 - 두번째 슬라이드
    // now : 2 - 세번째 슬라이드
    // 참 : 만약 1, 2번째 슬라이드일 경우
    // 거짓 : 3번째 슬라이드일 경우
    if (now < 3) {
      // 참일 경우
      // 다음 슬라이드로 이동
      slideEls.animate({
        top: height * now * -1 + "%",
      });
      // 변수 재선언
      now = now + 1;
    } else {
      // 거짓일 경우
      // 첫번째 슬라이드로 이동
      slideEls.animate({
        top: 0,
      });
      now = 1;
    }
  }
});
