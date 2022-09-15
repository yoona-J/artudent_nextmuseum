import React from 'react'
import {Icon} from 'antd';

function Footer() {

    const footer = () => {
        if (window.location.href === 'http://localhost:3000/') {
            return <>
                <div style={{display: 'none'}} />
            </>
        } else {
            return <>
                <div style={{
                    height: '80px', display: 'flex',
                    flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', fontSize:'1rem'
                }}>
                {/* <p> Happy Coding  <Icon type="smile" /></p> */}
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
