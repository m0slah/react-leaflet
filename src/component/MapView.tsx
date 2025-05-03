import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const position: LatLngExpression = [36.3554036, 43.9810604]; // London coords (example)

const MapView = () => {
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
            {/* Leaflet Map */}
            <MapContainer center={position} zoom={13} style={{borderRadius:'2%', color:"blue" ,height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://carto.com/">Carto</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position}>
                    <Popup>A marker in London</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapView;
