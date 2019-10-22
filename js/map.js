var map = L.map("map").setView([52.4158, 16.931], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.4158, 16.931])
  .addTo(map)
  .bindPopup("Best education school")
  .openPopup();