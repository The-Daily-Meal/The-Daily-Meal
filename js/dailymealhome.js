function keepstyle(whichstyle){
  var style= document.getElementById('whichstylehome').getAttribute("href").replace(/home|css\/|\.css/g, "");
  if (style == "cioe"){
    style+="style";
  }
  sessionStorage.setItem("currentstyle", style);
}

$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = "css/home"+sessionStorage.getItem("currentstyle")+".css";
    document.getElementById('whichstylehome').setAttribute("href", style);
    sessionStorage.removeItem('currentstyle');
  }

  /*if (sessionStorage.getItem("slide")){
    var num = sessionStorage.getItem("slide");
    $(function(){
      $('#carouselExampleCaptions').carousel({to:num});
    });
    sessionStorage.removeItem('slide');
  }*/
  if (document.getElementById("whichstylehome").getAttribute("href")=="css/homemedieval.css"){
   $("#mainhometext").wrap("<div class='row'></div>");
   $("#mainhometext").wrap('<div class="col col-lg-9"></div>');
   $("#thedailymeal .row").prepend('<div class="col-lg-2 d-none d-lg-block border-medieval"></div>');
   $("#thedailymeal .row").append('<div class="col-lg-1 d-none d-lg-block border-medieval"></div>');
   document.getElementById("maintitle").innerHTML = '<span><img src="imgs/MedievalBackgrounds/T.png" alt=""></span>he Daily Meal';
 }
 else if (name == 'homeimmerseave.css'){
   /*removing the elements before adding them, in case the user clicks on this style, while already displayed*/
   $(".loadingscreen").remove();
   $("#rain").remove();
   $('#makeitrain').remove();
   $('#content').removeAttr("style");

   /*adding an introductive loading screen, that contains the audio for this style*/
   $(".content").addClass("d-none");
   $("body").prepend('<div class="container loadingscreen d-block" id="loadingscreen"><p style="opacity:0.33;">(Click anywhere to skip this sequence)</p><div class="os-phrases" id="os-phrases"><audio autoplay loop src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" id="wavessound"><source src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" type="audio/wav">Your browser does not support the audio element.</audio><h2>Welcome</h2><h2>To The Daily Meal</h2></div></div>');
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
function changestyle(name){

  if (name=='homemedieval.css' && document.getElementById('whichstylehome').getAttribute('href') != "css/homemedieval.css"){
    $("#mainhometext").wrap("<div class='row' id='rowmed'></div>");
    $("#mainhometext").wrap('<div class="col col-lg-9"></div>');
    $("#thedailymeal .row").prepend('<div class="col-lg-2 d-none d-lg-block border-medieval"></div>');
    $("#thedailymeal .row").append('<div class="col-lg-1 d-none d-lg-block border-medieval"></div>');
    document.getElementById("maintitle").innerHTML = '<span><img src="imgs/MedievalBackgrounds/T.png" alt=""></span>he Daily Meal';
  }
  else if (document.getElementById("rowmed") && name!='homemedieval.css'){
    $(".border-medieval").remove();
    $("#mainhometext").unwrap();
    $("#mainhometext").unwrap();
    document.getElementById("maintitle").innerHTML = 'The Daily Meal';
  }
  else if (name != 'homemedieval.css'){
    $(".border-medieval").remove();
    document.getElementById("maintitle").innerHTML = 'The Daily Meal';
  };

  if (name == 'homeimmerseave.css'){
    /*removing the elements before adding them, in case the user clicks on this style, while already displayed*/
    $(".loadingscreen").remove();
    $("#rain").remove();
    $('#makeitrain').remove();
    $('#content').removeAttr("style");

    /*adding an introductive loading screen, that contains the audio for this style*/
    $(".content").addClass("d-none");
    $("body").prepend('<div class="container loadingscreen d-block" id="loadingscreen"><p style="opacity:0.33;">(Click anywhere to skip this sequence)</p><div class="os-phrases" id="os-phrases"><audio autoplay loop src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" id="wavessound"><source src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" type="audio/wav">Your browser does not support the audio element.</audio><h2>Welcome</h2><h2>To The Daily Meal</h2></div></div>');
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
  if (name == 'homepopart.css' || name == 'homebauhaus.css' || name == 'homecioestyle.css'){
    document.getElementById('homestylebase').setAttribute("href", "");
  }
  else{
    document.getElementById('homestylebase').setAttribute("href", "./css/home.css");
  }
  document.getElementById('whichstylehome').setAttribute("href", "css/"+name);
};
/*function dedicated to the rain functionality of the immerseave style - inspired by https://webdesigntips.blog/videos/pure-css-rain-animation-with-lighting-rain-effect-with-html5-and-css3-no-javascript/ by Amit Ghosh*/
function makeitrain(){
  /*checking if the rain button is set on rain or not*/
  if(document.getElementById("rain").getAttribute("rain")=="no"){
    /*set the storm gif as background of the page*/
    $("#contenthome").css("background-image", "url('imgs/immerseave/storm.gif')");
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
    $("#contenthome").css("background-image", "url('imgs/immerseave/4TF4.gif')");
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
