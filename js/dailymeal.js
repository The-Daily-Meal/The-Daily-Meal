function keepstyle(whichstyle){
  var style= document.getElementById(whichstyle).getAttribute("href").replace(/our|style|css\/|\.css/g, "");
  if (style == "cioe"){
    style+="style";
  }
  sessionStorage.setItem("currentstyle", style);
}
function chooseslide(numslide){
  sessionStorage.setItem("slide", numslide);
}
/*function dedicated to the rain functionality of the immerseave style - inspired by https://webdesigntips.blog/videos/pure-css-rain-animation-with-lighting-rain-effect-with-html5-and-css3-no-javascript/ by Amit Ghosh*/
function makeitrain(){
  /*checking if the rain button is set on rain or not*/
  if(document.getElementById("rain").getAttribute("rain")=="no"){
    /*set the storm gif as background of the page*/
    $("#content").css("background-image", "url('imgs/immerseave/storm.gif')");
    /*change the value of the rain button*/
    document.getElementById("rain").setAttribute("rain", "yes");
    /*display the rain*/
    $("#rain").removeClass("d-none");
    /*change the image displayed on the button and adapt its width*/
    document.getElementById('makeitrainimg').setAttribute("src", "imgs/immerseave/clipart246429.png");
    $("#makeitrainimg").css("width", "65px");
    /*change the ambient sound to a storm*/
    document.getElementById("wavessound").setAttribute("src", "sounds/mixkit-stormy-sea-waves-loop-1199.wav");
  }
  else{
    /*change the background gif back to quiet sea*/
    $("#content").css("background-image", "url('imgs/immerseave/4TF4.gif')");
    /*change the value of the rain button*/
    document.getElementById("rain").setAttribute("rain", "no");
    /*hide the rain*/
    $("#rain").addClass("d-none");
    /*change the image displayed on the button and adapt its width*/
    document.getElementById('makeitrainimg').setAttribute("src", "imgs/immerseave/clipart175629.png");
    $("#makeitrainimg").css("width", "25px");
    /*change the ambient sound to sea*/
    document.getElementById("wavessound").setAttribute("src", "sounds/mixkit-small-waves-harbor-rocks-1208.wav");
  }
}
function changestyle(name) {

  /*for the bauhaus style, add decorations for the headers of the articles*/
  if (name == "ourbauhaus.css"){
    $("div.header").append('<b class="vertical_bar1"></b><b class="bottom_bar2"></b><b class="top_bar3"></b><b class="circle1"></b><b class="square"></b>');
  }
  /*otherwise remove it*/
  else{
    $("div.header b:empty").remove();
  };

  /*for the medieval style*/
  if (name =="medievalstyle.css"){

    /*add the borders of the page, first removing everything for handling the case where starting from this style, the user clicks it again*/
    $("div").remove(".border-medieval");
    $(".col-12 > .row").unwrap().unwrap();
    $("div.header img").remove();
    $(".container > .row").wrapAll("<div class='col-12 col-lg-9'  />")
    $(".col-lg-9").wrap("<div class='row'  />");
    $(".col-lg-9").before("<div class='col-lg-2 d-none d-lg-block border-medieval'></div>");
    $(".col-lg-9").after("<div class='col-lg-1 d-none d-lg-block border-medieval'></div>");

    /*adding medieval images to the headers of articles*/
    $(".content > .container > .row:last .col-4:first-of-type .thing1_title").before('<img src="imgs/MedievalBackgrounds/th.jpg" alt="medieval food image 1" id="medimg1">');
    $(".content > .container > .row:last .col-4:nth-of-type(2) .thing1_title").before('<img src="imgs/MedievalBackgrounds/th (1).jpg" alt="medieval food image 2" id="medimg2">');
    $(".content > .container > .row:last .col-4:nth-of-type(3) .thing1_title").before('<img src="imgs/MedievalBackgrounds/1648a031180fd7bb6f201c0534889b88.jpg" alt="medieval food image 3" id="medimg3">');
  }
  /*otherwise remove decorations linked to medieval style only*/
  else{
      $("div").remove(".border-medieval");
      $(".col-12 > .row").unwrap().unwrap();

      $("#medimg1").remove();
      $("#medimg2").remove();
      $("#medimg3").remove();
    };

  /*for the futuristic immersive style*/
  if (name == "immerseave.css"){

    /*removing the elements before adding them, in case the user clicks on this style, while already displayed*/
    $(".loadingscreen").remove();
    $(".header hr").remove();
    $("#rain").remove();
    $('#makeitrain').remove();
    $('#content').removeAttr("style");

    /*adding an introductive loading screen, that contains the audio for this style*/
    $(".content").addClass("d-none");
    $("body").prepend('<div class="container loadingscreen d-block" id="loadingscreen"><p style="opacity:0.33;">(Click anywhere to skip this sequence)</p><div class="os-phrases" id="os-phrases"><audio autoplay loop src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" id="wavessound"><source src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" type="audio/wav">Your browser does not support the audio element.</audio><h2>Welcome</h2><h2>To The Daily Meal</h2></div></div>');
    /*decoration for the header*/
    $(".header").append("<hr>");
    /*adding a button for the rain functionality*/
    $("#dropdownMenuButton2").after('<div class="justify-content px-4"><button  class="btn btn-secondary" type="button" id="makeitrain" rain="yes" onclick="makeitrain()"><img src="imgs/immerseave/clipart175629.png" style="width:25px;" id="makeitrainimg"></button></div>');
    /*rain, initialized as not displayed*/
    $("body").prepend('<div class="content rain d-none" id="rain"></div>');

    /*opening sequence, pen by Sebastian Schepis on CodePen https://codepen.io/sschepis/pen/uiHmr*/
    $("#os-phrases > h2")
      .css('opacity', 1).lettering( 'words' )
      .children( "span" ).lettering()
      .children( "span" ).lettering();
     timeout = setTimeout(function(){
        document.getElementById('loadingscreen').style.opacity=0;
        $(".content").removeClass("d-none");
        $("#rain").addClass("d-none");
      }, 12000);
    /*clearing the loadingscreen by a click of the user*/
    $(".loadingscreen").click(function(){
      clearTimeout(timeout);
      document.getElementById('loadingscreen').style.opacity=0;
      $(".content").removeClass("d-none");
      $("#rain").addClass("d-none");
    });
  }

  /*removing elements inherent to the immerseave style*/
  else{
    $(".loadingscreen").remove();
    $(".header hr").remove();
    $("#rain").remove();
    $('#makeitrain').remove();
    $('#content').removeAttr("style");
  }

  /*setting the style of the page depending on the button clicked by the user*/
  document.getElementById('whichstyle').setAttribute("href", "css/"+name);
};

$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    if (sessionStorage.getItem("currentstyle") == "cioestyle" || sessionStorage.getItem("currentstyle") == "immerseave"){
      var style = "css/"+sessionStorage.getItem("currentstyle")+".css";
    }
    else if (sessionStorage.getItem("currentstyle") == "bauhaus" || sessionStorage.getItem("currentstyle") == "popart"){
      var style = "css/our"+sessionStorage.getItem("currentstyle")+".css";
    }
    else{
      var style = "css/"+sessionStorage.getItem("currentstyle")+"style.css";
    }
    document.getElementById('whichstyle').setAttribute("href", style);
    sessionStorage.clear();
  }

  /*for the medieval style*/
  if (document.getElementById("whichstyle").getAttribute("href")=="css/medievalstyle.css"){
    /*add the borders of the page, first removing everything for handling the case where starting from this style, the user clicks it again*/
    $("div").remove(".border-medieval");
    $(".col-12 > .row").unwrap().unwrap();
    $("div.header img").remove();
    $(".container > .row").wrapAll("<div class='col-12 col-lg-9'  />")
    $(".col-lg-9").wrap("<div class='row'  />");
    $(".col-lg-9").before("<div class='col-lg-2 d-none d-lg-block border-medieval'></div>");
    $(".col-lg-9").after("<div class='col-lg-1 d-none d-lg-block border-medieval'></div>");

    /*adding medieval images to the headers of articles*/
    $(".content > .container > .row:last .col-4:first-of-type .thing1_title").before('<img src="imgs/MedievalBackgrounds/th.jpg" alt="medieval food image 1" id="medimg1">');
    $(".content > .container > .row:last .col-4:nth-of-type(2) .thing1_title").before('<img src="imgs/MedievalBackgrounds/th (1).jpg" alt="medieval food image 2" id="medimg2">');
    $(".content > .container > .row:last .col-4:nth-of-type(3) .thing1_title").before('<img src="imgs/MedievalBackgrounds/1648a031180fd7bb6f201c0534889b88.jpg" alt="medieval food image 3" id="medimg3">');
  }

  /*for the bauhaus style, add decorations for the headers of the articles*/
  else if (document.getElementById("whichstyle").getAttribute("href")=="css/ourbauhaus.css") {
    $("div.header").append('<b class="vertical_bar1"></b><b class="bottom_bar2"></b><b class="top_bar3"></b><b class="circle1"></b><b class="square"></b>');
  }

  /*for the futuristic immersive style*/
  else if (document.getElementById("whichstyle").getAttribute("href")=="css/immerseave.css") {

    /*removing the elements before adding them, in case the user clicks on this style, while already displayed*/
    $(".loadingscreen").remove();
    $("#rain").remove();
    $('#makeitrain').remove();
    $('#content').removeAttr("style");

    /*adding an introductive loading screen, that contains the audio for this style*/
    $(".content").addClass("d-none");
    $("body").prepend('<div class="container loadingscreen d-block" id="loadingscreen"><p style="opacity:0.33;">(Click anywhere to skip this sequence)</p><div class="os-phrases" id="os-phrases"><audio autoplay loop src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" id="wavessound"><source src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" type="audio/wav">Your browser does not support the audio element.</audio><h2>Welcome</h2><h2>To The Daily Meal</h2></div></div>');
    /*decoration for the header*/
    $(".header").append("<hr>");
    /*adding a button for the rain functionality*/
    $("#dropdownMenuButton2").after('<div class="justify-content px-4"><button  class="btn btn-secondary" type="button" id="makeitrain" rain="yes" onclick="makeitrain()"><img src="imgs/immerseave/clipart175629.png" style="width:25px;" id="makeitrainimg"></button></div>');
    /*rain, initialized as not displayed*/
    $("body").prepend('<div class="content rain d-none" id="rain"></div>');

    /*opening sequence, pen by Sebastian Schepis on CodePen https://codepen.io/sschepis/pen/uiHmr*/
    $("#os-phrases > h2")
      .css('opacity', 1).lettering( 'words' )
      .children( "span" ).lettering()
      .children( "span" ).lettering();
     timeout = setTimeout(function(){
        document.getElementById('loadingscreen').style.opacity=0;
        $(".content").removeClass("d-none");
        $("#rain").addClass("d-none");
      }, 12000);
    /*clearing the loadingscreen by a click of the user*/
    $(".loadingscreen").click(function(){
      clearTimeout(timeout);
      document.getElementById('loadingscreen').style.opacity=0;
      $(".content").removeClass("d-none");
      $("#rain").addClass("d-none");
    });
  }
});
