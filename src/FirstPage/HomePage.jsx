import React from 'react'
import build from '../images/build.png'
import './HomePage.css'
import HomeNav from './HomeNav'


const HomePage = () => {
  return (
    <div>
      <HomeNav/>
   
                <div className='Body-image'> 

                    <h1 className='Header'>Register and renew your <br />
                            plate number today. </h1>

                      <p className='para'>Register and renew your plate number today. </p>
                      
                                <div className='Image'>
                                <img className='build' src={build} alt="" />
                                </div>      
                    
                </div> 

    </div>


  )
}

export default HomePage