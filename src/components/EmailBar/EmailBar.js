import React, { Component } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {CSSTransition} from 'react-transition-group'


export default class Emailbar extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = { visible: false };
    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick = () => {
    // 	this.setState({ visible: ! this.state.visible });
    // }

    handleToggle = ()=>{
        const e = document.getElementById('email');
        e.classList.remove('email-container');
        e.classList.add('is-open')
    }
    render(){

        return (
            
            <div id='email' className='email-wrapper'>
                <FontAwesomeIcon icon={faTimes} className='btn-x' onClick={this.handleToggle}/>
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
}