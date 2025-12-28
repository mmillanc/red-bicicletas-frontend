import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function BicicletaMap({ bicicletas }) {
  return (
    <MapContainer
      center={[-34.6037, -58.3816]}
      zoom={13}
      className="h-[500px] w-full rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap"
      />

      {bicicletas.map(b => (
        <Marker key={b._id} position={[b.lat, b.lng]}>
          <Popup>
            <strong>{b.nombre}</strong><br />
            {b.descripcion}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
