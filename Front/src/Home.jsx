import React from 'react'
import "./home.css"
import Header from './Header'

export default function Home() {
  return (
    <div>
        {<Header/>}

        <div className="home-pg1">
            <div className='home-box1'>
                
            </div>
            <div className='home-box2'>
                {/* <img className='home-logo' src={logo} alt="logo" /> */}
                <fieldset className='home-field1'>
                    <legend className='home-leg1'>▼</legend>
                    <h3>Join Our Class</h3>
                    <p>Learn from the best dance choreographers. Sign up for our dance lessons today.</p>
                </fieldset>

                <fieldset className='home-field2'>
                    <legend className='home-leg2'>▼</legend>
                    <h3>Dance Choreography</h3>
                    <p>Follow our dance choreography videos to learn different dance styles.</p>
                </fieldset>

                <fieldset className='home-field3'>
                    <legend className='home-leg3'>▼</legend>
                    <h3>Perform Onstage</h3>
                    <p>Perform onstage at our annual dance festival and get a chance to garner worldwide recognition.</p>
                </fieldset>
            </div>
        </div>

        <div className='home-pg2'>
           <div className='home-box3'>
                <p className='home-p1' >Sign <br />Up For <br />Classes</p>
           </div>
           <div className='home-box4'>
                <p className='home-p2'>Train under the best dance choreographers. <br />Sign up for dance lessons only at DS Dance Studio and <br />learn different dance styles from all over the world <br />like contemporary, hip-hop, ballet and more.</p>
                <h2 className='home-head'>➤ Personalized Dance Class Schedules</h2>
                <h2 className='home-head'>➤ Learn From 100+ Professional Dancers</h2>
                <h2 className='home-head'>➤ Chance To Perform On Broadway</h2>
                <h2 className='home-head'>➤ Attend Annual Dance Festivals</h2>
           </div>
        </div>

    </div>
  )
}
