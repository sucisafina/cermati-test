import React from 'react'
import './styles.css'
import EmailBar from '../EmailBar/EmailBar'

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-item'>@2018 Janto Motulo. All rights reserved</div>
            </div>
            <div className='email-stack'>
                <EmailBar/>
            </div>
        </>
    )
}
