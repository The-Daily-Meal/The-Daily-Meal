/* panel and sections of the articles */
$(document).ready(function(){
  $(".panel-heading").click(function(){
    $(".panel-body").slideToggle("slow");
  });
  $(".panel-body [class*='head' i]").click(function(){
    $(this).next().slideToggle("slow");
  });
  /*$(".head-sectionsArt1").click(function(){
    $(".body-sectionsArt1").slideToggle("slow");
  });
  $(".head-sectionsArt2").click(function(){
    $(".body-sectionsArt2").slideToggle("slow");
  });
  $(".head-sectionsArt3").click(function(){
    $(".body-sectionsArt3").slideToggle("slow");
  });
/* end panel and sections */


/* heads and body, first article */
  /*$(".headArt1-1").click(function(){
    $(".bodyArt1-1").slideToggle("slow");
  });
  $(".subHeadArt1-1").click(function(){
    $(".subBodyArt1-1").slideToggle("slow");
  });
  $(".subHeadArt1-2").click(function(){
    $(".subBodyArt1-2").slideToggle("slow");
  });
  $(".subSubHeadArt1-1").click(function(){
    $(".subSubBodyArt1-1").slideToggle("slow");
  });
  $(".subSubHeadArt1-2").click(function(){
    $(".subSubBodyArt1-2").slideToggle("slow");
  });
  $(".subSubHeadArt1-3").click(function(){
    $(".subSubBodyArt1-3").slideToggle("slow");
  });
  $(".subHeadArt1-3").click(function(){
    $(".subBodyArt1-3").slideToggle("slow");
  });
  $(".subHeadArt1-4").click(function(){
    $(".subBodyArt1-4").slideToggle("slow");
  });
  $(".subHeadArt1-5").click(function(){
    $(".subBodyArt1-5").slideToggle("slow");
  });
  $(".subHeadArt1-6").click(function(){
    $(".subBodyArt1-6").slideToggle("slow");
  });
  $(".subHeadArt1-7").click(function(){
    $(".subBodyArt1-7").slideToggle("slow");
  });
  $(".subHeadArt1-8").click(function(){
    $(".subBodyArt1-8").slideToggle("slow");
  });
  $(".subHeadArt1-9").click(function(){
    $(".subBodyArt1-9").slideToggle("slow");
  });
  $(".subHeadArt1-10").click(function(){
    $(".subBodyArt1-10").slideToggle("slow");
  });
  $(".subHeadArt1-11").click(function(){
    $(".subBodyArt1-11").slideToggle("slow");
  });
  $(".subHeadArt1-12").click(function(){
    $(".subBodyArt1-12").slideToggle("slow");
  });
  $(".subHeadArt1-13").click(function(){
    $(".subBodyArt1-13").slideToggle("slow");
  });
  $(".subHeadArt1-14").click(function(){
    $(".subBodyArt1-14").slideToggle("slow");
  });
  $(".subHeadArt1-15").click(function(){
    $(".subBodyArt1-15").slideToggle("slow");
  });
  $(".subHeadArt1-16").click(function(){
    $(".subBodyArt1-16").slideToggle("slow");
  });
  $(".subHeadArt1-17").click(function(){
    $(".subBodyArt1-17").slideToggle("slow");
  });
  $(".headArt1-2").click(function(){
    $(".bodyArt1-2").slideToggle("slow");
  });
  $(".headArt1-3").click(function(){
    $(".bodyArt1-3").slideToggle("slow");
  });
  $(".headArt1-4").click(function(){
    $(".bodyArt1-4").slideToggle("slow");
  });
  $(".headArt1-5").click(function(){
    $(".bodyArt1-5").slideToggle("slow");
  });
  $(".headArt1-6").click(function(){
    $(".bodyArt1-6").slideToggle("slow");
  });
  $(".headArt1-7").click(function(){
    $(".bodyArt1-7").slideToggle("slow");
  });
  $(".headArt1-8").click(function(){
    $(".bodyArt1-8").slideToggle("slow");
  });
  $(".headArt1-9").click(function(){
    $(".bodyArt1-9").slideToggle("slow");
  });
  $(".headArt1-10").click(function(){
    $(".bodyArt1-10").slideToggle("slow");
  });
/* heads and body, end first article */
/* heads and body, second article */
/*  $(".headArt2-1").click(function(){
    $(".bodyArt2-1").slideToggle("slow");
  });
  $(".subHeadArt2-1").click(function(){
    $(".subBodyArt2-1").slideToggle("slow");
  });
  $(".subHeadArt2-2").click(function(){
    $(".subBodyArt2-2").slideToggle("slow");
  });
  $(".subSubHeadArt2-1").click(function(){
    $(".subSubBodyArt2-1").slideToggle("slow");
  });
  $(".subHeadArt2-3").click(function(){
    $(".subBodyArt2-3").slideToggle("slow");
  });
  $(".subHeadArt2-4").click(function(){
    $(".subBodyArt2-4").slideToggle("slow");
  });
  $(".subHeadArt2-5").click(function(){
    $(".subBodyArt2-5").slideToggle("slow");
  });
  $(".subHeadArt2-6").click(function(){
    $(".subBodyArt2-6").slideToggle("slow");
  });
  $(".subHeadArt2-7").click(function(){
    $(".subBodyArt2-7").slideToggle("slow");
  });
  $(".subHeadArt2-8").click(function(){
    $(".subBodyArt2-8").slideToggle("slow");
  });
  $(".subHeadArt2-9").click(function(){
    $(".subBodyArt2-9").slideToggle("slow");
  });
  $(".headArt2-2").click(function(){
    $(".bodyArt2-2").slideToggle("slow");
  });
  $(".headArt2-3").click(function(){
    $(".bodyArt2-3").slideToggle("slow");
  });
  $(".headArt2-4").click(function(){
    $(".bodyArt2-4").slideToggle("slow");
  });
  $(".headArt2-5").click(function(){
    $(".bodyArt2-5").slideToggle("slow");
  });
  $(".headArt2-6").click(function(){
    $(".bodyArt2-6").slideToggle("slow");
  });
  $(".headArt2-7").click(function(){
    $(".bodyArt2-7").slideToggle("slow");
  });
  $(".headArt2-8").click(function(){
    $(".bodyArt2-8").slideToggle("slow");
  });
  $(".headArt2-9").click(function(){
    $(".bodyArt2-9").slideToggle("slow");
  });
/* heads and body, end second article */
/* heads and body, third article */
/*  $(".headArt3-1").click(function(){
    $(".bodyArt3-1").slideToggle("slow");
  });
  $(".subHeadArt3-1").click(function(){
    $(".subBodyArt3-1").slideToggle("slow");
  });
  $(".subHeadArt3-2").click(function(){
    $(".subBodyArt3-2").slideToggle("slow");
  });
  $(".subSubHeadArt3-1").click(function(){
    $(".subSubBodyArt3-1").slideToggle("slow");
  });
  $(".subHeadArt3-3").click(function(){
    $(".subBodyArt3-3").slideToggle("slow");
  });
  $(".subHeadArt3-4").click(function(){
    $(".subBodyArt3-4").slideToggle("slow");
  });
  $(".subHeadArt3-5").click(function(){
    $(".subBodyArt3-5").slideToggle("slow");
  });
  $(".subHeadArt3-6").click(function(){
    $(".subBodyArt3-6").slideToggle("slow");
  });
  $(".subHeadArt3-7").click(function(){
    $(".subBodyArt3-7").slideToggle("slow");
  });
  $(".subHeadArt3-8").click(function(){
    $(".subBodyArt3-8").slideToggle("slow");
  });
  $(".subHeadArt3-9").click(function(){
    $(".subBodyArt3-9").slideToggle("slow");
  });
  $(".headArt3-2").click(function(){
    $(".bodyArt3-2").slideToggle("slow");
  });
  $(".headArt3-3").click(function(){
    $(".bodyArt3-3").slideToggle("slow");
  });
  $(".headArt3-4").click(function(){
    $(".bodyArt3-4").slideToggle("slow");
  });
  $(".headArt3-5").click(function(){
    $(".bodyArt3-5").slideToggle("slow");
  });
  $(".headArt3-6").click(function(){
    $(".bodyArt3-6").slideToggle("slow");
  });
  $(".headArt3-7").click(function(){
    $(".bodyArt3-7").slideToggle("slow");
  });
  $(".headArt3-8").click(function(){
    $(".bodyArt3-8").slideToggle("slow");
  });
  $(".headArt3-9").click(function(){
    $(".bodyArt3-9").slideToggle("slow");
  });
  /* heads and body, end third article */


$('#article1body .metadata input[type="checkbox"]').click(function(){
    var name = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        $("#article1 span[about="+name+"]").css('background-color', '#ffb370');
        $("#article1 span[class~="+name+"]").css('background-color', '#ffb370');
        if ($("#article1 span[about="+name+"]").length){
          var topPos = $("#article1 span[about="+name+"]:first").offset().top;
          var scrolled = $("#article1").scrollTop();
          $("#article1").animate({scrollTop:scrolled + topPos-$("#article1").parent().offset().top}, 1000);
        }
      }
      else if($(this).prop("checked") == false){
        $("#article1 span[about="+name+"]").css('background-color', 'transparent');
        $("#article1 span[class~="+name+"]").css('background-color', 'transparent');
      }
  });
  $('#article2body .metadata input[type="checkbox"]').click(function(){
    var name = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        $("#article2 span[about="+name+"]").css('background-color', '#ffb370');
        $("#article2 span[class~="+name+"]").css('background-color', '#ffb370');
        if ($("#article2 span[about="+name+"]").length){
          var topPos = $("#article2 span[about="+name+"]:first").offset().top;
          var scrolled = $("#article2").scrollTop();
          $("#article2").animate({scrollTop:scrolled + topPos-$("#article2").parent().offset().top}, 1000);
        }
        $('#article2body > div[class~="body"] input[type="checkbox"]').prop('checked', true);
        $('#article2body div[class~="body"] + div[class="subBody"] input[type="checkbox"]').prop('checked', true);
      }
      else if($(this).prop("checked") == false){
        $("#article2 span[about="+name+"]").css('background-color', 'transparent');
        $("#article2 span[class~="+name+"]").css('background-color', 'transparent');
      }
  });
  $('#article3body .metadata input[type="checkbox"]').click(function(){
    var name = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        $("#article3 span[about="+name+"]").css('background-color', '#ffb370');
        $("#article3 span[class~="+name+"]").css('background-color', '#ffb370');
        if ($("#article3 span[about="+name+"]").length){
          var topPos = $("#article3 span[about="+name+"]:first").offset().top;
          var scrolled = $("#article3").scrollTop();
          $("#article3").animate({scrollTop:scrolled + topPos-$("#article3").parent().offset().top}, 1000);
        }
      }
      else if($(this).prop("checked") == false){
        $("#article3 span[about="+name+"]").css('background-color', 'transparent');
        $("#article3 span[class~="+name+"]").css('background-color', 'transparent');
      }
  });


  /* metadata: opacity on unselected articles */
  $('input[name="check1"]').click(function(){
      if($(this).prop("checked") == false){
        $("#article1 [style='background-color: #ffb370;']").css('background-color', 'transparent');
        $("#article1").css('opacity', '0.3');
        $("#article1body").css('opacity', '0.3');
        $(".metadata1 input[type='checkbox']").attr("disabled", true);
        $(".metadata1 input[type='checkbox']").attr("checked", false);
        $(".body-sectionsArt1 input[type='checkbox']").attr("checked", false);
  }
      else if($(this).prop("checked") == true){
        $("#article1").css('opacity', '1');
        $("#article1body").css('opacity', '1');
        $(".metadata1 input[type='checkbox']").attr("disabled", false);
      //  $(".metadata1 input[type='checkbox']").slideToggle("disabled", false);
      }
    });
    $('input[name="check2"]').click(function(){
      if($(this).prop("checked") == false){
        $("#article2 [style='background-color: #ffb370;']").css('background-color', 'transparent');
        $("#article2").css('opacity', '0.3');
        $("#article2body").css('opacity', '0.3');
        $(".metadata2 input[type='checkbox']").attr("disabled", true);
        $(".metadata2 input[type='checkbox']").attr("checked", false);
        $(".body-sectionsArt2 input[type='checkbox']").attr("checked", false);

      //  $(".metadata2 input[type='checkbox']").slideToggle('blocked', true);
  }
      else if($(this).prop("checked") == true){
        $("#article2").css('opacity', '1');
        $("#article2body").css('opacity', '1');
        $(".metadata2 input[type='checkbox']").attr("disabled", false);
      //  $(".metadata2 input[type='checkbox']").slideToggle('blocked', false);
    }
  });
        $('input[name="check3"]').click(function(){
        if($(this).prop("checked") == false){
          $("#article3 [style='background-color: #ffb370;']").css('background-color', 'transparent');
          $("#article3").css('opacity', '0.3');
          $("#article3body").css('opacity', '0.3');
          $(".metadata3 input[type='checkbox']").attr("disabled", true);
          $(".metadata3 input[type='checkbox']").attr("checked", false);
          $(".body-sectionsArt3 input[type='checkbox']").attr("checked", false);
      //    $(".metadata3 input[type='checkbox']").slideToggle('blocked', true);
        }
        else if($(this).prop("checked") == true){
          $("#article3").css('opacity', '1');
          $("#article3body").css('opacity', '1');
          $(".metadata3 input[type='checkbox']").attr("disabled", false);
      //    $(".metadata3 input[type='checkbox']").slideToggle('blocked', false);
    }
  });

  /* metadata: scroll to different section */
  $('#article1body .body-sectionsArt1 input[type="checkbox"]').click(function(){
    var section = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        var topPos = document.getElementById(section).offsetTop;
        $("#article1").animate({scrollTop:topPos-$("#article1").parent().offset().top}, 1000);
        $("#article1 [id="+section+"]").css('background-color', 'rgba(173, 217, 203, 0.7)');
        timeout = setTimeout(function(){
           $("#article1 [id="+section+"]").css('background-color', 'transparent');
         }, 5000);

      }
      else if($(this).prop("checked") == false){
        $("#article1 [id="+section+"]").css('background-color', 'transparent');
      }
  });
  $('#article2body .body-sectionsArt2 input[type="checkbox"]').click(function(){
    var section = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        var topPos = document.getElementById(section).offsetTop;
        $("#article2").animate({scrollTop:topPos-$("#article2").parent().offset().top}, 1000);
        $("#article2 [id="+section+"]").css('background-color', 'rgba(173, 217, 203, 0.7)');
        timeout = setTimeout(function(){
           $("#article2 [id="+section+"]").css('background-color', 'transparent');
         }, 5000);

      }
      else if($(this).prop("checked") == false){
        $("#article2 [id="+section+"]").css('background-color', 'transparent');
      }
  });
  $('#article3body .body-sectionsArt3 input[type="checkbox"]').click(function(){
    var section = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        var topPos = document.getElementById(section).offsetTop;
        $("#article3").animate({scrollTop:topPos-$("#article3").parent().offset().top}, 1000);
        $("#article3 [id="+section+"]").css('background-color', 'rgba(173, 217, 203, 0.7)');
        timeout = setTimeout(function(){
           $("#article3 [id="+section+"]").css('background-color', 'transparent');
         }, 5000);
      }
      else if($(this).prop("checked") == false){
        $("#article3 [id="+section+"]").css('background-color', 'transparent');
      }
  });

  /*metadata: click on an element in the article and open the metadata panel*/
  $('#article1 span[about]').click(function(){
    var name = $(this).attr('about');
    var checkname = $("#article1body [name="+name+"]");
    checkname.attr("checked", true);
    $("#article1 span[about="+name+"]").css('background-color', '#ffb370');
    $("#article1 span[class~="+name+"]").css('background-color', '#ffb370');
    checkname.parentsUntil(".panel-body").slideDown("slow");
    $(".panel-body").slideDown("slow");
    var topPos = checkname.offset().top;
    var scrolled = $("#article1body").scrollTop();
    $("#article1body").animate({scrollTop:scrolled + topPos- $("#article1body").parent().offset().top}, 1000);
  });
  $('#article2 span[about]').click(function(){
    var name = $(this).attr('about');
    var checkname = $("#article2body [name="+name+"]");
    checkname.attr("checked", true);
    $("#article2 span[about="+name+"]").css('background-color', '#ffb370');
    $("#article2 span[class~="+name+"]").css('background-color', '#ffb370');
    checkname.parentsUntil(".panel-body").slideDown("slow");
    $(".panel-body").slideDown("slow");
    var topPos = checkname.offset().top;
    var scrolled = $("#article2body").scrollTop();
    $("#article2body").animate({scrollTop:scrolled + topPos- $("#article2body").parent().offset().top}, 1000);
  });
  $('#article3 span[about]').click(function(){
    var name = $(this).attr('about');
    var checkname = $("#article3body [name="+name+"]");
    checkname.attr("checked", true);
    $("#article3 span[about="+name+"]").css('background-color', '#ffb370');
    $("#article3 span[class~="+name+"]").css('background-color', '#ffb370');
    checkname.parentsUntil(".panel-body").slideDown("slow");
    $(".panel-body").slideDown("slow");
    var topPos = checkname.offset().top;
    var scrolled = $("#article3body").scrollTop();
    $("#article3body").animate({scrollTop:scrolled + topPos- $("#article3body").parent().offset().top}, 1000);
  });

  /*Selects all descendants of a category -> WORK IN progress*/
  $('.metadata input[type="checkbox"]').click(function(){
    if ($(this).prop("checked")==true && $(this).parent().attr("class").toLowerCase().includes("head")){
      $(this).parent().next().find(":checkbox").prop('checked', true);
      if ($(this).parent().next().is(":visible")){
        $(this).parent().off("click");
        $(this).parent().find("label").click(function(){
          $(this).parent().next().slideToggle("slow");
        });
      }
    }
    else if ($(this).prop("checked")==false && $(this).parent().attr("class").toLowerCase().includes("head")){
      $(this).parent().next().find(":checkbox").prop('checked', false);
      if ($(this).parent().next().is(":visible")){
        $(this).parent().off("click");
        $(this).parent().find("label").click(function(){
          $(this).parent().next().slideToggle("slow");
        });
      }
    }
  });

  /**/
});
