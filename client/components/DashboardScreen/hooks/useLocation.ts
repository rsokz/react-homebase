import { useState, useEffect } from 'react';

export default () => {
  const [coords, setCoords] = useState(null);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setCoords(position.coords),
      err => setErrMessage(err.message)
    );
  }, []);

  return [coords, errMessage];
};
