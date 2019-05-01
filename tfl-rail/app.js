if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

function initMap() {
    var markers =  [
        {
        coords:{lat: 51.507351, lng: -0.127758},
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>London</h1>'
        },
        {
        coords:{lat: 51.509351, lng: -0.127758},
        content: '<h1>More London</h1>'
        }
    ];
    
    
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: markers[0].coords
    });

    var infoWindow = new google.maps.InfoWindow;

    var src = 'https://gerrymcgarry.github.io/tfl-rail/tfl.kml';
    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: map
    });

    kmlLayer.addListener('click', function(event) {
        var content = event.featureData.infoWindowHtml;
        var testimonial = document.getElementById('capture');
        testimonial.innerHTML = content;
      });

      var src2 = 'http://data.tfl.gov.uk/tfl/syndication/feeds/stations.kml?app_id=53b93a4d&app_key=e8552080fd429b2e9b8971c4b0b21b37';
      var tflLayer = new google.maps.KmlLayer(src2, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }

    //   tflLayer.addListener('click', function(event) {
    //       var content = event.featureData.infoWindowHtml;
    //       var testimonial = document.getElementById('capture');
    //       testimonial.innerHTML = content;
    //     });


    // for ( var i = 0; i < markers.length; i++) {
    //     addMarker(markers[i]);
    // }

    function addMarker(props) {

        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.iconImage
        });
        if(props.iconImage) {
            marker.setIcon(props.iconImage);
        }
        if(props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
             });
        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
        }
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
