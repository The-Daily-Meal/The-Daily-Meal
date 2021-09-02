$(document).ready(function(){
  if (document.getElementById("whichstylehome").getAttribute("href")==".\css\homemedieval.css"){
   $("#mainhometext").wrap("<div class='row'></div>");
   $("#mainhometext").wrap('<div class="col col-lg-9"></div>');
   $("#thedailymeal .row").prepend('<div class="col-lg-2 d-none d-lg-block border-medieval"></div>');
   $("#thedailymeal .row").append('<div class="col-lg-1 d-none d-lg-block border-medieval"></div>');
   document.getElementById("maintitle").innerHTML = '<span><img src="imgs/MedievalBackgrounds/T.png" alt=""></span>he Daily Meal';
 }
});
function changestyle(name){
  document.getElementById('whichstylehome').setAttribute("href", "css/"+name);

  if (name=='homemedieval.css'){
    $("#mainhometext").wrap("<div class='row' id='rowmed'></div>");
    $("#mainhometext").wrap('<div class="col col-lg-9"></div>');
    $("#thedailymeal .row").prepend('<div class="col-lg-2 d-none d-lg-block border-medieval"></div>');
    $("#thedailymeal .row").append('<div class="col-lg-1 d-none d-lg-block border-medieval"></div>');
    document.getElementById("maintitle").innerHTML = '<span><img src="imgs/MedievalBackgrounds/T.png" alt=""></span>he Daily Meal';
  }
  else if (document.getElementById("rowmed")){
    $(".border-medieval").remove();
    $("#mainhometext").unwrap();
    $("#mainhometext").unwrap();
    document.getElementById("maintitle").innerHTML = 'The Daily Meal';
  }
  else{
    $(".border-medieval").remove();
    document.getElementById("maintitle").innerHTML = 'The Daily Meal';
  };

  if (name == 'homepopart.css' || name == 'homebauhaus.css'){
    document.getElementById('homestylebase').setAttribute("href", "");
  }
  else{
    document.getElementById('homestylebase').setAttribute("href", "./css/home.css");
  }
};
