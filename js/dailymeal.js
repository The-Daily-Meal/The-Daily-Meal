function changestyle(name) {
  if (name !="medievalstyle.css"){
    document.getElementById('col1').setAttribute("class", 'd-none');
    document.getElementById('col2').setAttribute("class", 'col-4');
    document.getElementById('col3').setAttribute("class", 'col-4');
    document.getElementById('col4').setAttribute("class", 'col-4');
    document.getElementById('col5').setAttribute("class", 'd-none');

    document.getElementById('medimg1').setAttribute("class", 'd-none');
    document.getElementById('medimg2').setAttribute("class", 'd-none');
    document.getElementById('medimg3').setAttribute("class", 'd-none');
  }
  else{
      document.getElementById('col1').setAttribute("class", 'col-lg-2 d-none d-lg-block border-medieval');
      document.getElementById('col2').setAttribute("class", 'col-4 col-lg-3');
      document.getElementById('col3').setAttribute("class", 'col-4 col-lg-3');
      document.getElementById('col4').setAttribute("class", 'col-4 col-lg-3');
      document.getElementById('col5').setAttribute("class", 'col-lg-1 d-none d-lg-block border-medieval');


      document.getElementById('medimg1').setAttribute("class", '');
      document.getElementById('medimg2').setAttribute("class", '');
      document.getElementById('medimg3').setAttribute("class", '');
  }

  document.getElementById('whichstyle').setAttribute("href", "css/"+name);
}
