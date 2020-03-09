import React, { useState } from 'react'
import IntroTab from './IntroTab'
import HoursTab from './HoursTab'
import MapsTab from './MapsTab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons' 

  const DisplayStore=(props)=>{
    const [tabState, setTabState] =useState('introTab')
    
    return (
    <div style={blogSlider}>
          <FontAwesomeIcon style ={dollarSign} icon={faDollarSign} /> 
          <FontAwesomeIcon style ={starSign} icon={faStar} />
    <div>
    <div style={blogSliderItem}>
      <div style={blogSliderImg}>
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt="" width={300}/>
            
      </div>
      <div style={tab}>
          <div restaurantinfo= {props.restaurantinfo} style={tabChild} onClick ={()=>setTabState('introTab')}>About</div>
          <div restaurantinfo= {props.restaurantinfo} style={tabChild} onClick ={()=>setTabState('mapTab')}>Map</div>
          <div restaurantinfo= {props.restaurantinfo} style={tabChild} onClick ={()=>setTabState('hoursTab')}>Hours</div>
        </div>
      <div>
      <div style={restaurantName}>Restaurant Name</div>
      <div style= {address}>800 W Campbell Rd, Richardson, TX 75080</div>
        {tabState === 'introTab' ? <IntroTab />: tabState === 'mapTab' ? <MapsTab />: <HoursTab />}
      </div>
    </div>
  </div>
</div>

    )
}
const blogSlider ={
  width: 350,
  background: "#fff",
  boxShadow: "0px 3px 10px rgba(34, 35, 58, 0.2)",
  padding: 20,
  borderRadius: 25,
  minHeight:350,
  height: "auto",
  marginTop: 60,
  marginLeft:20
}
const blogSliderItem ={
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}
const blogSliderImg ={
  flexShrink: 0,
  height: 150,
  transform: "translateX(-80px)",
  overflow: "hidden",
  transform: "translateY(-50%)",
  width: "90%",
  position: "relative",
  top:20
}
const tab ={
  display:'flex',
  position:'relative',
  top:-50,
  justifyContent:'center',
}
const tabChild ={
  padding:"0px 7px 0px 7px",
  cursor:'pointer',
  margin:"0px 7px 0px 7px",
  textDecoration:'underline'
}
const restaurantName ={
  position:'relative',
  fontWeight:'bold',
  fontSize: 20,
  top:-50,
}
const address ={
  fontStyle:'italic',
  position:'relative',
  fontSize:13,
  top:-50,
  color:'grey'
}
const dollarSign ={
  color:'green',
  position:'relative',
  right: 160,
}
const starSign ={
  color:'orange',
  position:'relative',
  left:160,
}
export default DisplayStore