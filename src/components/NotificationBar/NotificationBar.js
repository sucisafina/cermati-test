import React from 'react'
import './styles.css'

export default function NotificationBar(props) {

    const handleClick = () => {
        const e = document.getElementById('notif');
        e.classList.remove('notif-container');
        e.classList.add('is-open');
    }
    return (
        <div id='notif' className='notif-container'>
            <div className='notif-desc'>
                <p>By accessing and using this website, you acknowledge that
                you have read and understand our<a href="#"> Cookie Policy</a>,<a href="#"> Privacy </a>and our 
                <a href="#"> Terms of Service</a></p>
            </div>
            <div className='btn-container'>
                <button className='btn-notif' onClick={handleClick}>Got It</button>
            </div> 
        </div> 
        
    )
}


