import React from 'react'
import './Home.css';
import image from '../../../assets/profile18.jpg';
//import pose from './logo.pnh.jpg';

const HomePage = () => {
  return (
    <div className="d-flex flex-row">
        <div className="space">
            <h1 className="homepara pt-3">Hello,</h1>
            <p className="namehead pt-3"> I'm<span className='paracol'> Dinesh</span> <br/>I am an enthusiastic frontend developer</p>
            <p className='para1'>I am a skilled and passionate front-end designer with experience <br/>in creating the static and dynamic websites</p>

        </div>
        <img src={image}  className='imagespace'/>
        
        
        

    </div>
  )
}

export default HomePage;