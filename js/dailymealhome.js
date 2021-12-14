function keepstyle(whichstyle){
  var style= document.getElementById('whichstylehome').getAttribute("href").replace(/home|css\/|\.css/g, "");
  if (style == "cioe"){
    style+="style";
  }
  sessionStorage.setItem("currentstyle", style);
}

function chooseslide(numslide){
  sessionStorage.setItem("slide", numslide);
}
$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = "css/home"+sessionStorage.getItem("currentstyle")+".css";
    document.getElementById('whichstylehome').setAttribute("href", style);
    sessionStorage.removeItem('currentstyle');
  }
  else{
    document.getElementById('whichstylehome').setAttribute("href", 'css/home.css');
  }

  if (sessionStorage.getItem("slide")){
    var num = sessionStorage.getItem("slide");
    $('.carousel-item').removeClass("active");
    $('.carousel-item:nth-of-type('+num+')').addClass("active");
    $('.carousel-indicators > button').removeClass("active");
    $('.carousel-indicators > button').removeAttr("aria-current");
    $('.carousel-indicators > button:nth-of-type('+num+')').addClass('active');
    $('.carousel-indicators > button:nth-of-type('+num+')').attr('aria-current', 'true');
    sessionStorage.removeItem('slide');
  }

  if (document.getElementById("whichstylehome").getAttribute("href")=="css/homemedieval.css"){
   $("#mainhometext").wrap("<div class='row' id='rowmed'></div>");
   $("#mainhometext").wrap('<div class="col col-lg-9"></div>');
   $("#rowmed").prepend('<div class="col-lg-2 d-none d-lg-block border-medieval"></div>');
   $("#rowmed").append('<div class="col-lg-1 d-none d-lg-block border-medieval"></div>');
  }
  else if (document.getElementById("whichstylehome").getAttribute("href")=="css/homeimmerseave.css"){
   /*removing the elements before adding them, in case the user clicks on this style, while already displayed*/
   $(".loadingscreen").remove();
   $("#rain").remove();
   $('#toremove1').remove();
   $('#toremove2').remove();
   $('#content').removeAttr("style");

   /*adding an introductive loading screen, that contains the audio for this style*/
   $(".content").addClass("d-none");
   $("body").prepend('<div class="container loadingscreen d-block" id="loadingscreen"><p style="opacity:0.33;">(Click anywhere to skip this sequence)</p><div class="os-phrases" id="os-phrases"><audio autoplay loop src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" id="wavessound"><source src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" type="audio/wav">Your browser does not support the audio element.</audio><h2>Welcome</h2><h2>To The Daily Meal</h2></div></div>');
   $("body").click(function(){
     document.getElementById('wavessound').play();
   });
   /*adding a button to mute the sound*/
   $("#dropdownMenuButton2").after('<div class="justify-content px-4" id="toremove2"><button  class="btn btn-secondary" type="button" id="turnsound" onclick="toggleSound()"><svg id="soundoff" display="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16"><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/></svg><svg id="soundon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg></button></div>');
   /*adding a button for the rain functionality*/
   $("#dropdownMenuButton2").after('<div class="justify-content px-4" id="toremove1"><button  class="btn btn-secondary" type="button" id="makeitrain" rain="no" onclick="makeitrain()"><img src="imgs/immerseave/clipart175629.png" style="width:25px;" id="makeitrainimg"></button></div>');
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
    $("#rowmed").prepend('<div class="col-lg-2 d-none d-lg-block border-medieval"></div>');
    $("#rowmed").append('<div class="col-lg-1 d-none d-lg-block border-medieval"></div>');
  }
  else if (document.getElementById("rowmed") && name!='homemedieval.css'){
    $(".border-medieval").remove();
    $("#mainhometext").unwrap();
    $("#mainhometext").unwrap();
  }
  else if (name != 'homemedieval.css'){
    $(".border-medieval").remove();
  };

  if (name == 'homeimmerseave.css'){
    /*removing the elements before adding them, in case the user clicks on this style, while already displayed*/
    $(".loadingscreen").remove();
    $("#rain").remove();
    $('#toremove1').remove();
    $('#toremove2').remove();
    $('#content').removeAttr("style");

    /*adding an introductive loading screen, that contains the audio for this style*/
    $(".content").addClass("d-none");
    $("body").prepend('<div class="container loadingscreen d-block" id="loadingscreen"><p style="opacity:0.33;">(Click anywhere to skip this sequence)</p><div class="os-phrases" id="os-phrases"><audio autoplay loop src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" id="wavessound"><source src="sounds/mixkit-small-waves-harbor-rocks-1208.wav" type="audio/wav">Your browser does not support the audio element.</audio><h2>Welcome</h2><h2>To The Daily Meal</h2></div></div>');
    /*adding a button to mute the sound*/
    $("#dropdownMenuButton2").after('<div class="justify-content px-4" id="toremove2"><button  class="btn btn-secondary" type="button" id="turnsound" onclick="toggleSound()"><svg id="soundoff" display="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16"><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/></svg><svg id="soundon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg></button></div>');
    /*adding a button for the rain functionality*/
    $("#dropdownMenuButton2").after('<div class="justify-content px-4" id="toremove1"><button  class="btn btn-secondary" type="button" id="makeitrain" rain="no" onclick="makeitrain()"><img src="imgs/immerseave/clipart175629.png" style="width:25px;" id="makeitrainimg"></button></div>');
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
    $('#toremove1').remove();
    $('#toremove2').remove();
    $('#content').removeAttr("style");
  }
  document.getElementById('whichstylehome').setAttribute("href", "css/"+name);
};
/*function dedicated to the rain functionality of the immerseave style - inspired by https://webdesigntips.blog/videos/pure-css-rain-animation-with-lighting-rain-effect-with-html5-and-css3-no-javascript/ by Amit Ghosh*/
function makeitrain(){
  /*checking if the rain button is set on rain or not*/
  if(document.getElementById("makeitrain").getAttribute("rain")=="no"){
    /*set the storm gif as background of the page and change the color of the text*/
    $("#content").css("background-image", "url('imgs/immerseave/storm.gif')");
    $("p").css("color", "white");
    /*change the value of the rain button*/
    document.getElementById("makeitrain").setAttribute("rain", "yes");
    /*display the rain*/
    $("#rain").removeClass("d-none");
    /*change the image displayed on the button and adapt its width*/
    document.getElementById('makeitrainimg').setAttribute("src", "imgs/immerseave/clipart246429.png");
    $("#makeitrainimg").css("width", "65px");
    /*change the ambient sound to a storm*/
    document.getElementById("wavessound").setAttribute("src", "sounds/mixkit-stormy-sea-waves-loop-1199.wav");
  }
  else{
    /*change the background gif back to quiet sea and change the color of the text*/
    $("#content").css("background-image", "url('imgs/immerseave/4TF4.gif')");
    $("p").css("color", "black");
    /*change the value of the rain button*/
    document.getElementById("makeitrain").setAttribute("rain", "no");
    /*hide the rain*/
    $("#rain").addClass("d-none");
    /*change the image displayed on the button and adapt its width*/
    document.getElementById('makeitrainimg').setAttribute("src", "imgs/immerseave/clipart175629.png");
    $("#makeitrainimg").css("width", "25px");
    /*change the ambient sound to sea*/
    document.getElementById("wavessound").setAttribute("src", "sounds/mixkit-small-waves-harbor-rocks-1208.wav");
  }
};
function toggleSound(){
  if(document.getElementById("wavessound").muted){
    document.getElementById("wavessound").muted = false;
  }
  else{
    document.getElementById("wavessound").muted = true;
  }
  $('#soundoff').toggle();
  $('#soundon').toggle();
};
// function for Disclaimer
function disclaimer(){
      var modal = document.getElementById("myModal");
      // Get the button that opens the modal
      var btn = document.getElementById("disclaimer");
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      // When the user clicks the button, open the modal
      btn.onclick = function(){
        modal.style.display = "block";
      }
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
};
