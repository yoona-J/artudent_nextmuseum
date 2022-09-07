import { Button } from 'antd'
import React from 'react'
import Logo from './img/Logo.png'
import Poster from './img/Poster.png'
// import '../../../index.css'
import '../LandingPage/LandingPage.css'

function LandingPage() {

    return (
        <div style={{ background: '#282828', width: '100%', height: '100%' }}>
            <div style={{ display: 'flex', width: '85%' }}>
                <img src={Logo} style={{ width: '130px', height: '65px', margin: '52px 0px 0px 230px' }} />
                <hr style={{ color: '#7F7F7F', width: '80%', height: '1px', background: '#7F7F7F', margin: '90px 0px 0px 32px', border: 0 }} />
            </div>
            <div style={{ width: '80%', height: '820px', background: '#343434', margin: '0px auto', marginTop: '28px', borderRadius: '50px'}}>
                <p id='gradient'>1st</p>
                <p id='main'>EXHIBITION,</p>
                <p id='main'>SHOW YOUR RELAXATION</p>
                <Button>Museum</Button>
                <Button>About Us</Button>
                <div>
                    <p>From</p>
                    <p>NOV 4th</p>
                </div>
                <div>
                    <p>To</p>
                    <p>NOV 13th</p>
                </div>
                <div style={{width: '600px', height: '600px'}}>
                    <img src={Poster} />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
