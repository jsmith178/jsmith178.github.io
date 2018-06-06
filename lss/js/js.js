
$(window).scroll(function() {


if ($(this).scrollLeft() < 2510) {

  $("#img_arrow").css({
    "position": "fixed",
    "top": "20",
    "left": "3060"

  });

} else {
$("#img_arrow").css({
  "position": "absolute",
  "top": "20px" ,
  "left":"260%"

});
	}

  if ($(this).scrollLeft() > 2510)
    {
  $("div#img_arrow").css({
    // "left": ($(window).scrollLeft()*0.5) + "px",
    // "height": ($(window).scrollLeft()*0.2) + "px",
    "animation-play-state": "running"

  });
    } else {
    $("div#img_arrow").css({
      "animation-play-state": "paused"

    });
    }


    // $("div#hrz_counter").css({
    //     "left": $(window).scrollLeft() + "px"}).text("px:"+$(window).scrollLeft());


    });
