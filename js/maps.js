var myCenter = new google.maps.LatLng(19.3788856,72.8315321);
            function initialize()
            {
                var mapProp = {
                    center: myCenter,
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(document.getElementById("map"), mapProp);


            }

            google.maps.event.addDomListener(window, 'load', initialize);
