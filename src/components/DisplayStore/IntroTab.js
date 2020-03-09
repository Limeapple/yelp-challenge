import React from 'react'
import Reviews from './Reviews'
const IntroTab=(props)=>{
    return(
        <div style={container}>
            <div>
                <img style={img} src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt="" width={50} height={50}/>
                <img style={img} src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt="" width={50} height={50}/>
                <img style={img} src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt="" width={50} height={50}/>
                <img style={img} src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt="" width={50} height={50}/>
            </div>
            <div>
                <Reviews /> 
            </div>
        </div>
    )
}
const container={
    overflowY:'scroll',
    height:'300px',
    position:'relative',
    top:-45,
}
const img ={
    padding:5,
    borderRadius:15,
}

export default IntroTab