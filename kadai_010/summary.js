$(function() {
  // 文字色の変化
  $("#change-color").on("click", function(){
    $("#target").css("color","red");
  });

  // 文字内容の変化
  $("#change-text").on("click", function() {
    $("#target").text("こんばんは");
  });

  // フェードアウト
  $("#fade-out").on("click", function() {
    $("#target").fadeOut();
  });

  // フェードイン
  $("#fade-in").on("click", function() {
    $("#target").fadeIn();
  });
})