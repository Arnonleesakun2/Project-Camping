import { MapContainer } from "react-leaflet";

import Layer from "./Layer";

const MapHome = () => {
  return (
    <div className="mt-10"> 
      <div className="text-3xl font-bold mb-2">Locations</div>
      <MapContainer
        center={[13, 100]}
        zoom={5}
        scrollWheelZoom={false}
        className="h-[400px] rounded-lg"
      >
      <Layer/>
      </MapContainer>
    </div>
  );
};

export default MapHome;
