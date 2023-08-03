$(function () {
  // modal
  $("#modal").removeClass("active");
  // .lst-bbs li:first-child 를 클릭했을 때
  $(".lst-bbs li:first-child").on("click", function () {
    // #modal에 클래스 active를 추가
    $("#modal").addClass("active");
  });
  // modal 닫기
  // #modal button 을 클릭했을 때
  $("#modal .m-btn").on("click", function () {
    $("#modal").removeClass("active");
  });

  // tabs
  // .tab-item 옆에 .on 클래스를 삭제
  $(".tab-item").removeClass("on");
  // 클릭했을 때 on 클래스가 나오게
  $(".tab-item:first-child").addClass("on");
  // .tab-item .tit 을 클릭했을 때
  $(".tab-item .tit").on("click", function () {
    // .tab-item 에 붙어있는 on을 먼저 삭제
    $(".tab-item").removeClass("on");
    // 방금 클릭한 나(this)의 부모(parent())에게 .on 추가
    $(this).addClass("on");
  });
});
