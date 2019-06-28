import React from 'react'
import './styles.css'
import Emailbar from '../Emailbar/Emailbar';
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
