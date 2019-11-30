document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map_about_us').length > 0)
  {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else
      lang = 'es';

    var js_file = document.createElement('script');
        js_file.type = 'text/javascript';
        js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDHBpBJe_03vl8Vh800lDTBVHdvxycpE1Q&callback=initMap&language=' + lang;
        js_file.setAttribute('async','');
        js_file.setAttribute('defer','');
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});

var marker;
function initMap() {
    var myPlace = {lat: 10.685019, lng: -71.602899};
    var map = new google.maps.Map(document.getElementById('map_about_us'), {
        center: myPlace ,
        zoom: 18,
        mapTypeId: 'hybrid',
        disableDefaultUI: true
    });

    var contentString = '<strong id="firstHeading">Oficinas Fresh Techs</strong>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
        });

    marker = new google.maps.Marker({
      map: map,
      title: 'Oficinas Fresh Techs',
      animation: google.maps.Animation.BOUNCE,
      position: myPlace
    });
    marker.addListener('click', toggleBounce);
    marker.addListener('click', function() {
            infowindow.open(map, marker);
            });
      }

function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);}
    }