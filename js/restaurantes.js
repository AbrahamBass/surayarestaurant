var map = L.map('map').setView([11.237752, -74.202311], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([11.225688, -74.189663]).addTo(map);
L.marker([11.230548, -74.199408]).addTo(map);
L.marker([11.237391, -74.205286]).addTo(map);
L.marker([11.241780, -74.213007]).addTo(map);
L.marker([11.228977, -74.172570]).addTo(map);