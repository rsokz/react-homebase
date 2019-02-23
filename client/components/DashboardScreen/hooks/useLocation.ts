import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrMessage(err.message)
    );
  }, []);

  return [lat, errMessage];
};
