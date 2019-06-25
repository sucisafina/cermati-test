import React, { Component } from 'react'
import './styles.css'


export default class NotificationBar extends Component {
    render() {
        return (
            <div className='notif-wrapper'>
                <div className='notif-container'>
                    <div className='notif-desc'>
                        <p>By accessing and using this website, you acknowledge that
                        you have read and understand our<a href="#"> Cookie Policy</a>,<a href="#"> Privacy </a>and our 
                        <a href="#"> Terms of Service</a></p>
                    </div>

                    <div className='btn-container'>
                        <button className='btn-notif'>Got It</button>
                    </div> 
                </div>
                 
            </div>
        )
    }
}
