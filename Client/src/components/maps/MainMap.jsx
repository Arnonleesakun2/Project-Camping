import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LocationMarker({ position, setPosition, setValue }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng);
      if (setValue) {
        setValue("lat", e.latlng.lat);
        setValue("lng", e.latlng.lng);
      }
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const MainMap = ({ register, location, setValue ,errors}) => {
  const DEFAULT_LOCATION = [13, 100];
  const [position, setPosition] = useState(null);
  return (
    <div className="mt-4">
      <p className="text-3xl font-bold mb-2">Where are you?</p>
      {register && (
        <>
          <input {...register("lat")} hidden />
          <input {...register("lng")} hidden />
        </>
      )}
      <MapContainer
        className="h-[400px] rounded-lg"
        center={location || DEFAULT_LOCATION}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location && <Marker position={location}></Marker>}

        <LocationMarker
          position={position}
          setPosition={setPosition}
          setValue={setValue}
        />
      </MapContainer>
    </div>
  );
};

export default MainMap;
