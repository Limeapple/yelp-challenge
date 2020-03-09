import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons' 

export default function Reviews(){
    return(
        <div>
            <hr/>
            <div style={container}>
            <img style={img}src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt="" width={35} height={35}/>
            <div style={name}>Janice</div>
            <div style={reviewsContainer}>
                <div style={reviewRating}>2<FontAwesomeIcon style ={dollarSign} icon={faDollarSign} /></div>
                <div style={reviewRating}>4<FontAwesomeIcon style ={starSign} icon={faStar} /></div>
            </div>
            </div>
            <div style={reviewContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <hr/>
            <div style={container}>
            <img style={img}src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt="" width={35} height={35}/>
            <div style={name}>Janice</div>
            <div style={reviewsContainer}>
                <div style={reviewRating}>2<FontAwesomeIcon style ={dollarSign} icon={faDollarSign} /></div>
                <div style={reviewRating}>4<FontAwesomeIcon style ={starSign} icon={faStar} /></div>
            </div>
            </div>
            <div style={reviewContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <hr/>
            <div style={container}>
            <img style={img}src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt="" width={35} height={35}/>
            <div style={name}>Janice</div>
            <div style={reviewsContainer}>
                <div style={reviewRating}>2<FontAwesomeIcon style ={dollarSign} icon={faDollarSign} /></div>
                <div style={reviewRating}>4<FontAwesomeIcon style ={starSign} icon={faStar} /></div>
            </div>
            </div>
            <div style={reviewContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <hr/>
        </div>
    )
}

const container ={
    display:'flex',
    position:'relative',
    padding:5,
    borderRadius:30,
    width:340  
}
const img ={
    borderRadius:50,
    marginRight:5
}
const name ={
    position:'relative',
    top:5,
}
const dollarSign={
    color:'green',
}
const starSign={
    color:'orange',
}
const reviewRating={
    position:'relative',
    top:5,
    marginRight:5
}
const reviewsContainer={
    display:'flex',
    justifyContent:'flex-end',
    width:'100%'
}
const reviewContent ={
    width:'95%',
    textAlign:'justified'
}