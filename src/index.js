const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxleGFuZHJhbGVhaCIsImEiOiJjamltNDg3OXMwMDZ5M3BwYXB4aGM1MzA0In0.Ct_0GIAkZf1Y1ehRzO6SQQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = buildMarker('hotel', [-74.009, 40.705], map);

const chicago = buildMarker('restaurant', [-87.6354, 41.8885], map);
