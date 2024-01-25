var map = L.map('map').setView([38.6375651, -90.2751430], 13);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);


// Load a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adding markers for each location
// Adding markers for each location
var marker1 = L.marker([38.6403391, -90.2937109]).addTo(map); // Art Hill
var marker2 = L.marker([38.6375651, -90.2751430]).addTo(map); // Soccer Field
var marker3 = L.marker([38.6425649, -90.2848430]).addTo(map); // Tennis Court
var marker4 = L.marker([38.6373471, -90.2859576]).addTo(map); // Promenade
var marker5 = L.marker([38.6348318, -90.2693254]).addTo(map); // Jefferson Lake

// Binding popups to each marker
marker1.bindPopup("<b>Art Hill</b><br>Beautiful landscape and art installations.");
marker2.bindPopup("<b>Soccer Field</b><br>Perfect for a game of soccer.");
marker3.bindPopup("<b>Tennis Court</b><br>Great for tennis enthusiasts.");
marker4.bindPopup("<b>Promenade</b><br>Ideal for a leisurely walk.");
marker5.bindPopup("<b>Jefferson Lake</b><br>Scenic lake view.");
