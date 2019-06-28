import React from 'react'
import './styles.css'
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Emailbar from '../Emailbar/Emailbar'
export default function Footer() {

    return (
        <>
            <div className='footer'>
                <div className='footer-item'>
                    <FontAwesomeIcon icon={faCopyright}/> 2018 Janto Motulo. All rights reserved
                </div> 
            </div>
            <Emailbar/>        
        </>
    )
}
