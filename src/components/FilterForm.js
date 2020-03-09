import React from 'react'
import Slider from './Slider'
export default function FilterForm(){
    let filterOptions = ["Seafood", "No Kids", "Fast Food", "Delivery", "Cafe", "Take Out", "Drinks", "Vegan", "Halal" ]
    return(
        <div style={container}>
            <div style={headerText}>Select all that apply</div>
                <div style={filterOptionsContainer}>
                    { filterOptions.map((name,i)=>
                            <div key={i} style={filterOptionButton}>{name}</div>
                    )}
                </div> 
                <div style={filterOptionsContainer}>
                    <Slider/>
                </div>  
        </div>
    )
}
const container = {
    width:500,
    height:400,
    background:'hsla(203, 18%, 91%, 1)',
    position:'absolute'
}
const headerText ={
    margin:'15px 0 15px 0'
}
const filterOptionsContainer={
    display:'flex',
    fontSize:16,
    flexWrap:'wrap',
    justifyContent:'center'
}
const filterOptionButton={
    margin:'0 5px 7px 5px',
    padding:4,
    border:"1px solid gray",
    borderRadius:10,
    cursor:'pointer'
}