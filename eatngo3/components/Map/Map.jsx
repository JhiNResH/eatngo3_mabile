import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function Map() {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${apiKey}`;

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh' }}>
            <TileLayer url={url} attribution="Google Maps" />
        </MapContainer>
    );
}

export default Map;