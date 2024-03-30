import { useState } from 'react';

const useCurrentLocation = () => {
  const [latitude, setLatitude] = useState(null); // State variable to store latitude
  const [longitude, setLongitude] = useState(null); // State variable to store longitude
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude); // Set latitude
        setLongitude(position.coords.longitude); // Set longitude
      },
      (error) => {
        console.error("Error fetching user location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
  return [latitude,longitude];
};

export default useCurrentLocation;