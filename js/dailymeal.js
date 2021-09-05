var timeout;

function passintro() {
  alert("hey");
  clearTimeout(timeout);
};
function makeitrain(){
  if(document.getElementById("rain").getAttribute("rain")=="no"){
    $("#content").css("background-image", "url('imgs/immerseave/storm.gif')");
    document.getElementById("rain").setAttribute("rain", "yes");
    $("#rain").removeClass("d-none");
    document.getElementById('makeitrainimg').setAttribute("src", "imgs/immerseave/clipart246429.png");
    $("#makeitrainimg").css("width", "65px");
    document.getElementById("wavessound").setAttribute("src", "sounds/mixkit-stormy-sea-waves-loop-1199.wav");
  }
  else{
    $("#content").css("background-image", "url('imgs/immerseave/4TF4.gif')");
    document.getElementById("rain").setAttribute("rain", "no");
    $("#rain").addClass("d-none");
    document.getElementById('makeitrainimg').setAttribute("src", "imgs/immerseave/clipart175629.png");
    $("#makeitrainimg").css("width", "25px");
    document.getElementById("wavessound").setAttribute("src", "sounds/mixkit-small-waves-harbor-rocks-1208.wav");
  }
}
function changestyle(name) {
  if (name == "ourbauhaus.css"){
    $("div.header").append('<b class="vertical_bar1"></b><b class="bottom_bar2"></b><b class="top_bar3"></b><b class="circle1"></b><b class="square"></b>');
  }
  else{
    $("div.header b:empty").remove();
  };
  if (name !="medievalstyle.css"){

    $("div").remove(".border-medieval");
    $("div.col-4").removeClass("col-lg-3");

    $("div.header img").remove();
  }
  else{
    $("div").remove(".border-medieval");
    $("div.header img").remove();
    $(".row").prepend("<div class='col-lg-2 d-none d-lg-block border-medieval'></div>");
    $(".row").append("<div class='col-lg-1 d-none d-lg-block border-medieval'></div>");
    $("div.col-4").addClass("col-lg-3");

    $("#ic1-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/th.jpg" alt="medieval food image 1">');
    $("#ic2-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/th (1).jpg" alt="medieval food image 2">');
    $("#ic3-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/1648a031180fd7bb6f201c0534889b88.jpg" alt="medieval food image 3">');
  };
  if (name == "immerseave.css"){
    $(".loadingscreen").remove();
    $("#rain").remove();
    $('#makeitrain').remove();
    $(".content").addClass("d-none");
    $("body").prepend('<div class="content rain d-none" id="rain"></div>');
    $("body").prepend('<div class="container loadingscreen d-block" id="loadingscreen"><div class="os-phrases" id="os-phrases"><audio autoplay loop src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" id="wavessound"><source src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" type="audio/wav">Your browser does not support the audio element.</audio><h2>Welcome</h2><h2>To The Daily Meal</h2></div></div>');
    $(".header").append("<hr>");
    $("#dropdownMenuButton2").after('<div class="justify-content px-4"><button  class="btn btn-secondary" type="button" id="makeitrain" rain="no" onclick="makeitrain()"><img src="imgs/immerseave/clipart175629.png" style="width:25px;" id="makeitrainimg"></button></div>');

    $("#os-phrases > h2")
      .css('opacity', 1).lettering( 'words' )
      .children( "span" ).lettering()
      .children( "span" ).lettering();
     timeout = setTimeout(function(){
        document.getElementById('loadingscreen').style.opacity=0;
        $(".content").removeClass("d-none");
        $("#rain").addClass("d-none");
      }, 12000);
    $
  }
  else{
    $(".loadingscreen").remove();
    $(".header hr").remove();
    $("#rain").remove();
    $('#makeitrain').remove();
  }
  document.getElementById('whichstyle').setAttribute("href", "css/"+name);
};
$(document).ready(function(){
  if (document.getElementById("whichstyle").getAttribute("href")==".\css\medievalstyle.css"){
    $("div").remove(".border-medieval");
    $(".row").prepend("<div class='col-lg-2 d-none d-lg-block border-medieval'></div>");
    $(".row").append("<div class='col-lg-1 d-none d-lg-block border-medieval'></div>");
    $("div.col-4").addClass("col-lg-3");

    $("#ic1-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/th.jpg" alt="medieval food image 1">');
    $("#ic2-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/th (1).jpg" alt="medieval food image 2">');
    $("#ic3-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/1648a031180fd7bb6f201c0534889b88.jpg" alt="medieval food image 3">');
  }
  else if (document.getElementById("whichstyle").getAttribute("href")==".\css\ourbauhaus.css") {
    $("div.header").append('<b class="vertical_bar1"></b><b class="bottom_bar2"></b><b class="top_bar3"></b><b class="circle1"></b><b class="square"></b>');
  }
  else if (document.getElementById("whichstyle").getAttribute("href")=="css/immerseave.css") {
    $(".loadingscreen").remove();
    $("#rain").remove();
    $('#makeitrain').remove();
    $(".content").addClass("d-none");
    $("body").prepend('<div class="content rain d-none" id="rain"></div>');
    $("body").prepend('<div class="container loadingscreen d-block" id="loadingscreen"><div class="os-phrases" id="os-phrases"><audio autoplay loop src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" id="wavessound"><source src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" type="audio/wav">Your browser does not support the audio element.</audio><h2>Welcome</h2><h2>To The Daily Meal</h2></div></div>');
    $(".header").append("<hr>");
    $("#dropdownMenuButton2").after('<div class="justify-content px-4"><button  class="btn btn-secondary" type="button" id="makeitrain" rain="no" onclick="makeitrain()"><img src="imgs/immerseave/clipart175629.png" style="width:25px;" id="makeitrainimg"></button></div>');

    $("#os-phrases > h2")
      .css('opacity', 1).lettering( 'words' )
      .children( "span" ).lettering()
      .children( "span" ).lettering();
     timeout = setTimeout(function(){
        document.getElementById('loadingscreen').style.opacity=0;
        $(".content").removeClass("d-none");
        $("#rain").addClass("d-none");
      }, 12000);
  }

});
