console.log("I am running")
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

$(document).ready(getLocationService);
locationData = {};
var onSuccess = function(pos) {
  console.log(pos);
  setLocation(pos);
};

positionSet = {
  postion1: 0,
  position2:0
}


function setLocation(args){
  if (!positionSet.position1) {
          positionSet.position1 =
            {
              lat: args.coords.latitude,
              lng: args.coords.longitude
            };
                }
  else {
    positionSet.position2 =  {
              lat: args.coords.latitude,
              lng: args.coords.longitude
            };
    console.log(calculateSpeed(positionSet.position1, positionSet.position2));

    positionSet.position1 = positionSet.position2;
  }
}

Math.radians = function(degrees) {
  return degrees * Math.PI / 180.0;
};

function calculateSpeed(args1, args2)
{
  lat1 = Math.radians(args1.lat) ;
  lon1 = Math.radians(args1.lng);

  lat2 = Math.radians(args2.lat);
  lon2 = Math.radians(args2.lng);

  // radius of earth in miles*100000
  r = 395900000;

  // P
  rho1 = r * Math.cos(lat1);
  z1 = r * Math.sin(lat1);
  x1 = rho1 * Math.cos(lon1);
  y1 = rho1 * Math.sin(lon1);

  // Q
  rho2 = r * Math.cos(lat2);
  z2 = r * Math.sin(lat2);
  x2 = rho2 * Math.cos(lon2);
  y2 = rho2 * Math.sin(lon2);

  // Dot product
  dot = (x1 * x2 + y1 * y2 + z1 * z2);
  cos_theta = dot / (r * r);

  theta = Math.acos(cos_theta);

  // MPH (11.6 is 5s/3600 * 100000)
  return (r * theta / 139);
}


function getLocationService(){
    // do whatever you like here
    navigator.geolocation.getCurrentPosition( onSuccess );

    setTimeout(getLocationService, 5000);
};



function getLocationService(){
    // do whatever you like here
    navigator.geolocation.getCurrentPosition( onSuccess );
    $.ajax({

    })

    setTimeout(getLocationService, 5000);
};




////////////////////////////running the service of javascript
// function yourFunction(){
//     // do whatever you like here

//     setTimeout(yourFunction, 5000);
// }

// yourFunction();
// Please note that this is NOT a recursive function. The function is not calling itself before it ends, it's calling a setTimeout function that will be later call the same function again.


/////////////////////////////////////////////watch location

    // var watchID = null;


    // //
    // function f() {
    //     // Update every 1 ms seconds
    //     var options = {enableHighAccuracy: true,timeout: 5000,maximumAge: 0,desiredAccuracy: 0, frequency: 1 };
    //     watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    // }

    // // onSuccess Geolocation
    // //


    // function onSuccess(position) {
    //   function initMap() {
    //       var map = new google.maps.Map( document.getElementById('map'), {
    //       center: {lat: -34.397, lng: 150.644},
    //       zoom: 6
    //       });

    //       var infoWindow = new google.maps.InfoWindow({map: map});

    //       var pos = {
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude
    //         };

    //         infoWindow.setPosition(pos);

    //         infoWindow.setContent('Location found.');

    //         map.setCenter(pos);

    //       }
    // }

    // // clear the watch that was started earlier
    // //
    // function clearWatch() {
    //     if (watchID != null) {
    //         navigator.geolocation.clearWatch(watchID);
    //         watchID = null;
    //     }
    // }

    // // onError Callback receives a PositionError object
    // //
    // function onError(error) {
    //   alert('code: '    + error.code    + '\n' +
    //         'message: ' + error.message + '\n');
    // }

    // $('#button').on('click', f);
/////////////////////////////////////////////////////////////







// ////////////////////////////////////////Google sample maps

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  debugger
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}


// ////////////////////////////////////////////Error Handling
//       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//         infoWindow.setPosition(pos);
//         infoWindow.setContent(browserHasGeolocation ?
//                               'Error: The Geolocation service failed.' :
//                               'Error: Your browser doesn\'t support geolocation.');
//       }
