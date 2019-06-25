import React, { Component } from 'react'
import './styles.css'


export default class NotificationBar extends Component {
    render() {
        return (
            <div className='notif-wrapper'>
                <div className='notif-desc'>
                    <p>By accessing and using this website, you acknowledge that
                    you have read and understand our<a href="#"> Cookie Policy</a>,<a href="#"> Privacy </a>and our 
                    <a href="#"> Terms of Service</a></p>

                    <button className='btn-notif'>Got It</button>
                </div>
            </div>
        )
    }
}
