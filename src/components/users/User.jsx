import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeNav from '../layout/HomeNav';

function User() {
    const [user, setUser] = useState({});
    // const [loading, setLoading] = useState(true);
    const params = useParams();
    const userId = params.userId;
    

    const getUser = async () => {
        try {
            // alert(userId)
            const response = await fetch('https://reqres.in/api/users/' + userId);
            // alert(response);
            const userData = await response.json();
            // alert(JSON.stringify(userData) + "this is data");
            setUser(userData.data);
        } catch (error) {
            // alert(JSON.stringify(error));
            console.log(error);
        }
    }
       useEffect(() =>{
        getUser();
    })
  return (
    <>
      <HomeNav />
      {user && (
        <div>
          <h1>{user.first_name}</h1>
          <h1>{user.last_name}</h1>
          <h5>{user.email}</h5>
          <img src={user.avatar} alt="my-avartar" />
        </div>
      )}
    </>
  );
}

export default User