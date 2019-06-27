import React, {useState} from 'react'
import './styles.css'
import Emailbar from '../Emailbar/Emailbar';


export default function Footer() {

    return (
        <>
            <div className='footer'>
                <div className='footer-item'>@2018 Janto Motulo. All rights reserved</div>
                
            </div>
           
           <Emailbar/>
        </>
    )
}
