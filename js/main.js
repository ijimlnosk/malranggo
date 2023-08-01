$(document).ready(function () {
  var $imgClick = $("#mainImg");
  $("#mainImg").click(function () {
    window.location.assign("../html/imagePage.html");
  });

  var $imgBanner = $("#mainImg");
  var i = 0;
  var imgList = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
  var $imgBtn_right = $("#btn_right");
  var $imgBtn_left = $("#btn_left");

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
});
