import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 30.7076, // Chandigarh, India
  lng: 76.715126,
};

const GoogleMapsComponent: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15} // Adjust zoom level
    >
      <MarkerF
        position={center}
        icon={{
          url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
          scaledSize: new window.google.maps.Size(50, 50),
        }}
      />
    </GoogleMap>
  ) : (
    <p>Loading...</p>
  );
};

export default React.memo(GoogleMapsComponent);
