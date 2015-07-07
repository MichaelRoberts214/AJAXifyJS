// AJAXify JS

/*====== STEPS ======*/

// MVP

// select form form page
// turn text inputs to JSON
// obtain proper method and URL
// do AJAX request


$(document).ready(function(){
  /*====== get multiple forms working after one form======*/;
  // $("form").each(function(i, f) {
  //   // code here
  // });

  $("form").submit(function(e, f) {
    e.preventDefault();
    console.log('submitted');
  });

});
