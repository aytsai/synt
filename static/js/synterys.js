// resize navbar when logo is resized
function adjust_navbar () {
  var width = $('.navbar-upper').width();
  var height = $('.navbar-upper').height();
  var imgHeight = width < 800 ? 150/800 * width : height;
  
  $('.navbar-upper').css("height", imgHeight);
}

function adjust_mmargin () {
  var width = $(window).width();
  
  if (width < 500) {
    var newMargin = (width - 280)/2;
    
    $("#camap").css("margin-left", newMargin);
    $("#twmap").css("margin-left", newMargin);
  }
}

$( window ).resize(function() {
  adjust_navbar ();
  adjust_mmargin ();
});

$(window).on("orientationchange",function(){
  adjust_navbar ();
  adjust_mmargin ();
});

function initMap() {
  var myOptions = {zoom: 14, center: new google.maps.LatLng(37.6082651,-122.0829269), mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(document.getElementById("camap"), myOptions);
  marker = new google.maps.Marker({map: map,
                                   position: new google.maps.LatLng(37.6082651,-122.0829269),
                                   icon: '../static/img/marker.png'});
                                   
  myOptions = {zoom: 14, center: new google.maps.LatLng(25.0295289,121.4128502), mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(document.getElementById("twmap"), myOptions);
  marker = new google.maps.Marker({map: map,
                                   position: new google.maps.LatLng(25.0295289,121.4128502),
                                   icon: '../static/img/marker.png'});
}

$(document).ready(function(){
  adjust_navbar ();
  adjust_mmargin ();
  
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50)
      $('#top').fadeIn("fast");
    else
      $('#top').fadeOut("fast");
  });

  $('#top').click(function() {
      $('body,html').animate({
          scrollTop : 0
      }, "slow");
  });
  
  if (document.getElementById("camap")) {
    google.maps.event.addDomListener(window, 'load', initMap);
  }
});