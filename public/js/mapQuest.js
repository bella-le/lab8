function initMap() {
	L.mapquest.key = 'TY77hQ1WtNCOtG1AuLe3p9VGTVzXUIL6';
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}