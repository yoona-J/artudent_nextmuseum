import React from 'react'
import Logo from './img/Logo.png'

function Footer() {

    const footer = () => {
        if (window.location.href === 'http://localhost:3000/') {
            return <>
                <div style={{display: 'none'}} />
            </>
        } else {
            return <>
            <div style={{backgroundColor: '#3E3E3E', width: '100%', height: '200px', display: 'inline-block'}}>
                <img src={Logo} style={{ width: '130px', height: '65px', margin: '67px 0px 68px 110px'}}/>
                <div style={{ float: 'right', margin: '46px 46px 46px 0px', color: '#fff'}}>
                    <p>고객 문의</p>
                    <p>About Artudent</p>
                    <p>(c) copyright all right reserved</p>
                </div>
            </div>
            </>
        }
    }
    return (
        <div>
            {footer()}
        </div>
    )
}

export default Footer
