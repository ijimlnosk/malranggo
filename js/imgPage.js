$(document).ready(function () {
  var $imgLogo = $("#malrangLogo");
  $imgLogo.click(function () {
    window.location.assign("../html/main.html");
  });

  var imgNum = 0;
  var imgCount = 0;
  var arrImg = ["1", "2", "3", "4", "5"];
  var $imgPageImg = $("#imgPage-img1");
  var $btnP = $("#btnP");

  $btnP.click(function () {
    // $("#imgPage-img2").append("<div class=innerImg id=innerImg2></div>");
    ran = Math.floor(Math.random() * arrImg.length);
    imgNum = $("<img>", {
      src: "../images/" + arrImg[ran] + ".jpeg",
      width: "20%",
      height: "60%",
      class: "img",
      border: "1px solid #000",
    });
    imgNum.css({ margin: "2%" });
    // $("#imgPage-img2").append(imgNum);
    if (imgCount >= 16) return;
    $("#imgPage-img2").append(imgNum);
    imgCount++;
  });
});
