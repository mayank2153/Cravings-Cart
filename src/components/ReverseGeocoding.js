import React, { useState, useEffect } from 'react';
import useCurrentLocation from '../utils/useCurrentLocation';

const ReverseGeocoding = () => {
  const [address, setAddress] = useState('');
  const [lat, long] = useCurrentLocation();

  useEffect(() => {
    const fetchAddress = async () => {
      if (lat !== null && long !== null) {
        const url = `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${lat},${long}&language=en`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '990ae6262fmshf1051ff32ff650dp1b1e7bjsn0c65fe496961',
            'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setAddress(result?.results[0]?.address);
          console.log(result?.results[0]);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchAddress();
  }, [lat, long]);

  return (
    <div>
      {address ? (
        <p className='user-address'>{address}</p>
      ) : (
        <p>Loading address...</p>
      )}
    </div>
  );
};

export default ReverseGeocoding;
