import React, { Component } from 'react'
import './styles.css'
import HighlightsItem from '../HighlightsItem/HighlightsItem'

export default class HighlightsPannel extends Component {
    render() {
        return (
            <div className='highlights-container'>
                <div className='highlights-pannel'>
                    <div className='highlight-title'>
                        <p>What Can I Help You?</p>
                    </div>
                    <div className='highlight-desc'>
                        <p>Our work then targeted, best practices outcomes social innovations synergy.
                        Venture philantropy, revolutionary inclusive policymaker relief. User-centered program areas scales.
                        </p>
                    </div>
                </div>
                <div className='item-wrapper'>
                    <HighlightsItem/>
                </div>
                
            </div>
        )
    }
}
