import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default function Emailbar (){

    function handleToggle(){
        const e = document.getElementById('email');
        e.classList.remove('email-container');
        e.classList.add('is-open')
    }
        return (
            <div id='email' className='email-wrapper'>
                <FontAwesomeIcon icon={faTimes} className='btn-x' onClick={() => handleToggle()}/>
                <div className='email-container'>
                    <p className='email-header'>Get latest updates in web technologies</p>
                    <p className='email-desc'>I write articles related to web technologies, such as design trends, development tools,
                    UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.</p>
                </div>

                <form>
                    <input type='text' id='email-input' placeholder='Email address . . .' />

                    <button className='btn-submit'>Count me in!</button>
                </form>
                
            </div> 
        )
}
