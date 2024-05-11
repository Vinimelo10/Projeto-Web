import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 11);
    
    const OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB }).addTo(map);
    
    const WAQI_URL = "https://api.waqi.info/feed/here/?token=7e6a7ed24e1e4fcadb7b32f9eb48c8faad9873cf";
    const WAQI_ATTR = 'Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>';
    const waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR });
    
    map.addLayer(waqiLayer);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default LeafletMap;
