import React from 'react'
import FilterForm from './FilterForm'
export default function Searchbar(props){
    return(
        <div style={searchContainer}>
            <input style={{...searchbar,width:250}} type ="search" placeholder="Search Location" label="search by location"/> 
            <div>
                <input style={searchbar} onClick={()=>{props.changeFilterFormState()}} type ="search" placeholder="Search Restaurant" label="search by restaurant"/> 
                {props.showFilter === true ? <FilterForm />: null}
            </div>
            <button style={button}>Search</button> 
        </div>
    )
}
const searchContainer ={
    position:'relative',
    top:-300,
    display:'flex',
    justifyContent:'center'
}
const searchbar ={
    padding:15,
    fontSize:15,
    width:500,
}   
const button ={
    padding:17,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    backgroundColor:'hsla(0, 98%, 61%, 1)',
    border:'none',
    fontSize:15
}
