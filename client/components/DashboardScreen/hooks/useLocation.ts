import { useState, useEffect } from 'react';

export default () => {
  const [coords, setCoords] = useState(null);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setCoords(position.coords),
      err => setErrMessage(err.message),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  console.log('error', errMessage);
  return [coords, errMessage];
};
