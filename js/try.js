$(document).ready(function(){
  $(".panel-heading").click(function(){
    $(".panel-body").slideToggle("slow");
  });
});

$(".carousel-item").turn({
  width: 400,
  height: 300,
  autoCenter: true
});
