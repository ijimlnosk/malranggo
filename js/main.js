$(document).ready(function () {
  var $imgLogo = $("#malrangLogo");
  $imgLogo.click(function () {
    window.location.assign("../html/main.html");
  });

  var $imgClick = $("#mainImg");
  $imgClick.click(function () {
    window.location.assign("../html/imagePage.html");
  });

  var $imgBanner = $("#mainImg");
  var i = 0;
  var imgList = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
  var $imgBtn_right = $("#btn_right");
  var $imgBtn_left = $("#btn_left");
  var $imgDiscord = $("#discord");
  var $imgKakao = $("#kakao");

  $imgBtn_right.click(function () {
    i++;
    if (i >= imgList.length) {
      i = 0;
    }
    var imgName = imgList[i];
    $imgBanner.attr("src", "../images/" + imgName);
  });

  $imgBtn_left.click(function () {
    i--;
    if (i <= -1) {
      i = 3;
    }
    var imgName = imgList[i];
    $imgBanner.attr("src", "../images/" + imgName);
  });

  //discord 이미지 클릭시
  $imgDiscord.click(function () {
    window.location.assign("https://discord.gg/wuqpQAaF");
  });

  //kakao 이미지 클릭시
  $imgKakao.click(function () {
    window.location.assign("https://open.kakao.com/o/gVGRgQee");
  });
});
