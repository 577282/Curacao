// Initialize the map and set its view to Curaçao
var map = L.map('map').setView([12.1696, -68.9900], 11);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Fetch the GeoJSON file and add it to the map
fetch('https://raw.githubusercontent.com/577282/Curacao/b8dbf941997aed1e2a7452f247029265c5350c4d/Geolocation/Piscadera.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function(feature) {
        return { color: 'blue' };  // Customize the color or other styles if needed
      },
      onEachFeature: function(feature, layer) {
        // Bind events for hover effect
        layer.on('mouseover', function(e) {
          // Create a popup with an image
          const popup = L.popup()
            .setLatLng(e.latlng)
            .setContent('<img src="https://raw.githubusercontent.com/577282/Curacao/7e82631b5b9a5afe66e4b89b9ece2ff9dee8c7c1/Geofigures/Piscadera.png" alt="Description" style="width:400px; height:auto;">')
            .openOn(map);
        });

        layer.on('mouseout', function() {
          // Close the popup when the mouse leaves the area
          map.closePopup();
        });
      }
    }).addTo(map);
  })
  .catch(error => {
    console.error('Error loading the GeoJSON file:', error);
  });

// Fetch the GeoJSON file and add it to the map
fetch('https://raw.githubusercontent.com/577282/Curacao/ae92e62dedee479f52fc7258ff90835ced3b6b06/Geolocation/Doublereef.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function(feature) {
        return { color: 'blue' };  // Customize the color or other styles if needed
      },
      onEachFeature: function(feature, layer) {
        // Bind events for hover effect
        layer.on('mouseover', function(e) {
          // Create a popup with an image
          const popup = L.popup()
            .setLatLng(e.latlng)
            .setContent('<img src="https://raw.githubusercontent.com/577282/Curacao/145f2f9c34fdcc21abc06ce24fab9e22c62d7a9c/Geofigures/Doublereef.png" alt="Description" style="width:400px; height:auto;">')
            .openOn(map);
        });

        layer.on('mouseout', function() {
          // Close the popup when the mouse leaves the area
          map.closePopup();
        });
      }
    }).addTo(map);
  })
  .catch(error => {
    console.error('Error loading the GeoJSON file:', error);
  });

// Fetch the GeoJSON file and add it to the map
fetch('https://raw.githubusercontent.com/577282/Curacao/4774278f58f968747ecab7b3d80770f4596f0743/Geolocation/Kokomobeach.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function(feature) {
        return { color: 'blue' };  // Customize the color or other styles if needed
      },
      onEachFeature: function(feature, layer) {
        // Bind events for hover effect
        layer.on('mouseover', function(e) {
          // Create a popup with an image
          const popup = L.popup()
            .setLatLng(e.latlng)
            .setContent('<img src="https://raw.githubusercontent.com/577282/Curacao/b30448b099d849ab34d72f6a5680432efa49b28c/Geofigures/Kokomobeach.png" alt="Description" style="width:400px; height:auto;">')
            .openOn(map);
        });

        layer.on('mouseout', function() {
          // Close the popup when the mouse leaves the area
          map.closePopup();
        });
      }
    }).addTo(map);
  })
  .catch(error => {
    console.error('Error loading the GeoJSON file:', error);
  });

// Fetch the GeoJSON file and add it to the map
fetch('https://raw.githubusercontent.com/577282/Curacao/43f8fa49f36ff6957521bf6778cb2ba147002796/Geolocation/Mariepampoen.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function(feature) {
        return { color: 'blue' };  // Customize the color or other styles if needed
      },
      onEachFeature: function(feature, layer) {
        // Bind events for hover effect
        layer.on('mouseover', function(e) {
          // Create a popup with an image
          const popup = L.popup()
            .setLatLng(e.latlng)
            .setContent('<img src="https://raw.githubusercontent.com/577282/Curacao/08de3dfe96fef16a780f089f566484eff01d310d/Geofigures/Mariepampoen.png" alt="Description" style="width:400px; height:auto;">')
            .openOn(map);
        });

        layer.on('mouseout', function() {
          // Close the popup when the mouse leaves the area
          map.closePopup();
        });
      }
    }).addTo(map);
  })
  .catch(error => {
    console.error('Error loading the GeoJSON file:', error);
  });

// Fetch the GeoJSON file and add it to the map
fetch('https://raw.githubusercontent.com/577282/Curacao/15889f2c13d3f0035987a2aa2ae6fc3e32227617/Geolocation/Playakalki.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function(feature) {
        return { color: 'blue' };  // Customize the color or other styles if needed
      },
      onEachFeature: function(feature, layer) {
        // Bind events for hover effect
        layer.on('mouseover', function(e) {
          // Create a popup with an image
          const popup = L.popup()
            .setLatLng(e.latlng)
            .setContent('<img src="https://raw.githubusercontent.com/577282/Curacao/fac8f83eac220db1e6787f8dc7932c3e190292e5/Geofigures/Playakalki.png" alt="Description" style="width:400px; height:auto;">')
            .openOn(map);
        });

        layer.on('mouseout', function() {
          // Close the popup when the mouse leaves the area
          map.closePopup();
        });
      }
    }).addTo(map);
  })
  .catch(error => {
    console.error('Error loading the GeoJSON file:', error);
  });

// Fetch the GeoJSON file and add it to the map
fetch('https://raw.githubusercontent.com/577282/Curacao/8e016afd605bd7dd400bbb6e5f1ef50290536b75/Geolocation/Portomarie.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function(feature) {
        return { color: 'blue' };  // Customize the color or other styles if needed
      },
      onEachFeature: function(feature, layer) {
        // Bind events for hover effect
        layer.on('mouseover', function(e) {
          // Create a popup with an image
          const popup = L.popup()
            .setLatLng(e.latlng)
            .setContent('<img src="https://raw.githubusercontent.com/577282/Curacao/f83b91faaf909cf7122cfa871a9a2844ada7190a/Geofigures/Portomarie.png" alt="Description" style="width:400px; height:auto;">')
            .openOn(map);
        });

        layer.on('mouseout', function() {
          // Close the popup when the mouse leaves the area
          map.closePopup();
        });
      }
    }).addTo(map);
  })
  .catch(error => {
    console.error('Error loading the GeoJSON file:', error);
  });

// Fetch the GeoJSON file and add it to the map
fetch('Geolocations/Snakebay.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function(feature) {
        return { color: 'blue' };  // Customize the color or other styles if needed
      },
      onEachFeature: function(feature, layer) {
        // Bind events for hover effect
        layer.on('mouseover', function(e) {
          // Create a popup with an image
          const popup = L.popup()
            .setLatLng(e.latlng)
            .setContent('<img src="Geofigures/Snakebay.png" alt="Description" style="width:400px; height:auto;">')
            .openOn(map);
        });

        layer.on('mouseout', function() {
          // Close the popup when the mouse leaves the area
          map.closePopup();
        });
      }
    }).addTo(map);
  })
  .catch(error => {
    console.error('Error loading the GeoJSON file:', error);
  });

// Fetch the GeoJSON file and add it to the map
fetch('Geolocations/Waterfactory.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function(feature) {
        return { color: 'blue' };  // Customize the color or other styles if needed
      },
      onEachFeature: function(feature, layer) {
        // Bind events for hover effect
        layer.on('mouseover', function(e) {
          // Create a popup with an image
          const popup = L.popup()
            .setLatLng(e.latlng)
            .setContent('<img src="Geofigures/Waterfactory.png" alt="Description" style="width:400px; height:auto;">')
            .openOn(map);
        });

        layer.on('mouseout', function() {
          // Close the popup when the mouse leaves the area
          map.closePopup();
        });
      }
    }).addTo(map);
  })
  .catch(error => {
    console.error('Error loading the GeoJSON file:', error);
  });
