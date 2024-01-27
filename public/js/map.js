
	{/* // let mapToken = "<%= process.env.MAP_TOKEN %>";
  // console.log(mapToken); */}

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsdGEtc3R1ZHVlbnQiLCJhIjoiY2xvMDk0MTVhMTJ3ZDJrcGR5ZDFkaHl4ciJ9.Gj2VU1wvxc7rFVt5E4KLOQ';

const map = new mapboxgl.Map({
container: 'map', // container ID
center: listing.geometry.coordinates, // starting position [lng, lat]
zoom: 9 // starting zoom
});

console.log(listing.geometry.coordinates);

const marker = new mapboxgl.Marker({color: "red"})
 .setLngLat(listing.geometry.coordinates)//Listing.geometry.coordinates
 .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h5>${listing.title}</h5><p>Exact location provided after booking</p>`))
 .addTo(map);
