$(document).ready(function(){
  if ($("#whichstylehome[href='.\css\homemedieval.css']")){
   $("#mainhometext").wrap("<div class='row'></div>");
   $("#mainhometext").wrap('<div class="col col-lg-9"></div>');
   $("#thedailymeal .row").prepend('<div class="col-lg-2 d-none d-lg-block border-medieval"></div>');
   $("#thedailymeal .row").append('<div class="col-lg-1 d-none d-lg-block border-medieval"></div>');
   document.getElementById("maintitle").innerHTML = '<span><img src="imgs/MedievalBackgrounds/T.png" alt=""></span>he Daily Meal';
  };
});
