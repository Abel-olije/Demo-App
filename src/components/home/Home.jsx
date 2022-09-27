import React, { useContext,useState, useEffect } from 'react'
import HomeNav from '../layout/HomeNav'
import AuthContext from '../../context/AuthContext'
import './Home.css'
import locationImage from  '../../asset/location.png';



function Home() {
    const authctx = useContext(AuthContext);
    const { token, isLoggedIn} = authctx;
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    useEffect(() => {
      return navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          alert("Error code: " + error.message);
        }
      );
    }, [latitude, longitude]);

  return (
    <>
      <HomeNav />
      <main>
        <img src={locationImage} className="image" />
        <p>Your current location latitude is : {latitude}</p>
        <p>Your current location longitude is : {longitude}</p>
      </main>
    </>
  );
}

export default Home;