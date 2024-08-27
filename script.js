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
            .setContent('<img src="Geofigures/Piscadera.png" alt="Description" style="width:400px; height:auto;">')
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
fetch('Geolocations/Doublereef.geojson')
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
            .setContent('<img src="Geofigures/Doublereef.png" alt="Description" style="width:400px; height:auto;">')
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
fetch('Geolocations/Kokomobeach.geojson')
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
            .setContent('<img src="Geofigures/Kokomobeach.png" alt="Description" style="width:400px; height:auto;">')
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
fetch('Geolocations/Mariepampoen.geojson')
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
            .setContent('<img src="Geofigures/Mariepampoen.png" alt="Description" style="width:400px; height:auto;">')
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
fetch('Geolocations/Playakalki.geojson')
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
            .setContent('<img src="Geofigures/Playakalki.png" alt="Description" style="width:400px; height:auto;">')
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
fetch('Geolocations/Portomarie.geojson')
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
            .setContent('<img src="Geofigures/Portomarie.png" alt="Description" style="width:400px; height:auto;">')
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
