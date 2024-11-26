import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 30.7076,
  lng: 76.715126,
};

const GoogleMapsComponent: React.FC = () => {
  const contactUs = useSelector((state: RootState) => state.contactus.data);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const coordinates = contactUs?.location?.coordinates || [];

  const handleLoad = (map: google.maps.Map) => {
    mapRef.current = map;
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(new window.google.maps.LatLng(center.lat, center.lng));

    coordinates.forEach((point: { lat: number; long: number }) => {
      bounds.extend(new window.google.maps.LatLng(point.lat, point.long));
    });

    map.fitBounds(bounds);
  };

  const handleUnmount = () => {
    mapRef.current = null;
  };

  const handleMarkerClick = (point: { lat: number; lng: number }) => {
    setSelectedPoint(point);

    if (mapRef.current) {
      mapRef.current.setZoom(18);
      mapRef.current.panTo(point);
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={handleLoad}
      onUnmount={handleUnmount}
    >
      {/* Marker for the center */}
      <MarkerF
        position={center}
        icon={{
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        onClick={() => handleMarkerClick(center)}
      />

      {/* Markers for other coordinates */}
      {coordinates.map((point: { _id: string; lat: number; long: number }) => (
        <MarkerF
          key={point._id}
          position={{ lat: point.lat, lng: point.long }}
          icon={{
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          onClick={() => handleMarkerClick({ lat: point.lat, lng: point.long })}
        />
      ))}
    </GoogleMap>
  ) : (
    <p>Loading...</p>
  );
};

export default React.memo(GoogleMapsComponent);
