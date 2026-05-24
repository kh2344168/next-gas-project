"use client";

import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";

const stations = [
  { id: 1, name: "Cairo", position: [30.0444, 31.2357] },
  { id: 2, name: "Alexandria", position: [31.2001, 29.9187] },
  { id: 3, name: "Port Said", position: [31.2653, 32.3019] },
  { id: 4, name: "Luxor", position: [25.6872, 32.6396] },
  { id: 5, name: "Asyut", position: [27.1809, 31.1837] },
];

export default function MapView() {
  return (
    <MapContainer
      center={[26.8206, 30.8025]}
      zoom={6}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stations.map((station) => (
        <CircleMarker
          key={station.id}
          center={station.position as [number, number]}
          radius={8}
          pathOptions={{
            color: "#FF7A59",
            fillColor: "#FF7A59",
            fillOpacity: 0.8,
          }}
        />
      ))}
    </MapContainer>
  );
}