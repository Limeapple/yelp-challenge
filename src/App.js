import React, { useEffect, useState } from 'react';
import './App.css';
import Homepage from './components/Homepage'

const App=()=> {
  const [restaurantInfo, setRestaurantInfo] = useState(null)
  const geolocation= () =>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position)
      })}
  }
  
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/13mZhNYCpBEapjUxPGTLKw',
    {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer yg9NrBQeDMqVnwtYJGxFeRP0qFWpI_IbdCCcupf1gG13X6e_Gwn8QeX3AyrY-v2lfztHNQ3cu6mtNnGyxCsRnyU5KlbsuPe_RhJbyP1lZv6Eixz5vKlmQCmYZmJlXnYx',
          'Content-Type': 'application/json'
      }
  })
      .then(results => results.json())
      .then(data => {
       
        console.log("App" +restaurantInfo)
      }).catch(()=>{
        console.log("Failed to retrieve data =(")
      });
  },
    geolocation(),
  []);

  return (
    <div className="App">
      <Homepage restaurantinfo={restaurantInfo}/> 
    </div>
  );
}

export default App