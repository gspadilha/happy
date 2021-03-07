import React from 'react';
import Leaflet, { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { MyPopup } from './styles';
import 'leaflet/dist/leaflet.css';

interface IMyMap {
  position: LatLngExpression;
  zoom?: number;
  textPopup: string;
  children?: React.ReactNode;
}

const mapIcon = Leaflet.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [38, 48],
  iconAnchor: [19, 48],
  popupAnchor: [170, 9],
});

const MyMapContainer: React.FC<IMyMap> = ({
  position,
  zoom,
  textPopup,
  children,
}) => {
  const finalZoom = zoom === undefined ? 10 : zoom;

  return (
    <MapContainer
      center={position}
      zoom={finalZoom}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={position} icon={mapIcon}>
        <MyPopup closeButton={false} minWidth={240} maxWidth={240}>
          {textPopup}
          {children}
        </MyPopup>
      </Marker>
    </MapContainer>
  );
};

export default MyMapContainer;
