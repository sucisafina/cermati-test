import React from 'react'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css'



export default function EmailBar() {
    return (
        <div className='email-bar'>
            <div className='x-btn'>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
            
            <div className='email-desc'>
                <p className='email-header'>Get the latest updates in Web Technologies</p>
                <p>I write articles related to Web Technologies,
                such as design trends, development tools, UI/UX case studies
                and reviews, and more. Sign up to my newsletter to get them all</p>

                <form className='form-email'>
                    <div>
                        <input type='text' id='email' placeholder='Email address....'></input>
                    </div>
                    <input type="button" class="btn-submit" value="Input Button"></input>
                </form>
                
            </div>
        </div>
    )
}
