import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Location() {
    const [ip, setIp] = useState(null); // State to hold the IP address
    const [geoData, setGeoData] = useState(null); // State to hold geolocation data
  
const fetchIpAddress = async()=>{
  try{
     const response = await axios.get(`${process.env.REACT_APP_API_IP_ADDRESS}`)
     console.log(response.data.ip);
     setIp(response.data.ip)
  }
  catch(error){
    console.log(error)
  }
}

const getGeoLocationData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}`)
      setGeoData(response.data); // Set geolocation data in state
      console.log(response.data)
     } catch (error) {
      console.error("Error fetching geolocation data:", error.message);
    }
  };


useEffect(()=>{
    fetchIpAddress()
    getGeoLocationData()
},[])


  return (
    <div>
      <h4>Ip address:{ip}</h4>  
      <div>
          Country: {geoData?.location.country}
          <br />
          Region: {geoData?.location.region}
        </div>

    </div>
  )
}

export default Location