function changestyle(name) {
  if (name == "ourbauhaus.css"){
    $("div.header").append('<b class="vertical_bar1"></b><b class="bottom_bar2"></b><b class="top_bar3"></b><b class="circle1"></b><b class="square"></b>');
  }
  else{
    $("div.header b:empty").remove();
  }
  if (name !="medievalstyle.css"){

    $("div").remove(".border-medieval");
    $("div.col-4").removeClass("col-lg-3");

    $("div.header img").remove();
  }
  else{
    $(".row").prepend("<div class='col-lg-2 d-none d-lg-block border-medieval'></div>");
    $(".row").append("<div class='col-lg-1 d-none d-lg-block border-medieval'></div>");
    $("div.col-4").addClass("col-lg-3");

    $("#ic1-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/th.jpg" alt="medieval food image 1">');
    $("#ic2-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/th (1).jpg" alt="medieval food image 2">');
    $("#ic3-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/1648a031180fd7bb6f201c0534889b88.jpg" alt="medieval food image 3">');
  }

  document.getElementById('whichstyle').setAttribute("href", "css/"+name);
};

$(document).ready(function(){

  if ($("#whichstyle[href='css/medievalstyle.css']")){
    $("div").remove(".border-medieval");
    $(".row").prepend("<div class='col-lg-2 d-none d-lg-block border-medieval'></div>");
    $(".row").append("<div class='col-lg-1 d-none d-lg-block border-medieval'></div>");
    $("div.col-4").addClass("col-lg-3");

    $("#ic1-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/th.jpg" alt="medieval food image 1">');
    $("#ic2-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/th (1).jpg" alt="medieval food image 2">');
    $("#ic3-header h2.thing2_authors:last").after('<img src="imgs/MedievalBackgrounds/1648a031180fd7bb6f201c0534889b88.jpg" alt="medieval food image 3">');
  }
  else if ($("#whichstyle[href='css/ourbauhaus.css']")) {
    $("div.header").append('<b class="vertical_bar1"></b><b class="bottom_bar2"></b><b class="top_bar3"></b><b class="circle1"></b><b class="square"></b>');
  }

});
