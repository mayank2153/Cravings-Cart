import React, { useEffect } from 'react';
import axios from 'axios'; // Import axios
import useCurrentLocation from './useCurrentLocation';
const useFetchCoords = ({ address }) => {
    // Assuming useCurrentLocation is a custom hook you've defined elsewhere
    const [lat, long] = useCurrentLocation(); 

    useEffect(() => {
        const findCoords = async () => {
            const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${address}&language=en`;
            const headers = {
                'X-RapidAPI-Key': '990ae6262fmshf1051ff32ff650dp1b1e7bjsn0c65fe496961',
                'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
            };

            try {
                const response = await axios.get(url, { headers });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        findCoords();
    }, [address]);

    return [lat, long];
};

export default useFetchCoords;
