import React, { useState } from 'react'
import DisplayStore from './DisplayStore/DisplayStore'
import peopleEating from './peopleEating.jpg';
import SearchBar from './SearchBar'
const Homepage=(props)=> {
    console.log(props.restaurantinfo)
    const [showFilter, setShowFilter] =useState(false)
    let array = new Array(20).fill(0);
    const changeFilterFormState =()=>{
        setShowFilter(!showFilter)
    }
    return (
        <div style = {container}>
            <img style = {imgStyle} src={peopleEating} alt="people eating together"/>
            <div >
                <SearchBar showFilter={showFilter} changeFilterFormState={changeFilterFormState} />
            </div>    
            <h1 style = {heading}>Restaurants Nearby</h1>
            <div style = {storeContainer}>
                { array.map((name,i)=><DisplayStore key={i} restaurantinfo={props.restaurantinfo}/>)}
            </div>
        </div>
    )
}

const container = {
    backgroundColor: 'hsla(0, 0%, 95%, 1)',
    height: '100vh',
    overflowY:'auto',
    overflowX:'hidden',
}

const imgStyle={
    width:"100vw",
    height:"75vh"
}

const heading ={
    color:"hsla(25, 99%, 61%, 1)"
}
const storeContainer ={
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    marginBottom:30
}
export default Homepage