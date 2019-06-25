import React, { Component } from 'react'
import './styles.css'
import Button from '../Button/Button';
import NotificationBar from '../NotificationBar/NotificationBar'

export default class Jumbotron extends Component {
    render() {
        return (
        <section className="hero-image">
            
            <div className="overlay">
            <NotificationBar/>
            <img src={require('../../assets/y-logo-white.png')} alt="Smiley face" height="42" width="42"></img>
    
            
                <div className='hero-container'>
                    <p className='hero-title'>Hello! I'm Janto Motulo</p>
                    <p className='hero-desc1'>Consult, Design, and Develop Website</p>
                    <p className='hero-desc2'>Have something great in mid? Feel free to contact me
                    I'll help you to make it happen.</p>
                    <Button/>
                </div>
            </div>
        </section>
        )
    }
}
