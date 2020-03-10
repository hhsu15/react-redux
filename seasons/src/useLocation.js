import { useState, useEffect } from "react";

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
      },
      err => {
        setErrorMessage(err.message);
      } // if user denies to share location then it calls this function
    );
  }, []);
  return [lat, errMessage];
};

export default useLocation;
