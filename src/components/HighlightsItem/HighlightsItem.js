import React from 'react'
import './styles.css'
import { faComment, faPaintBrush, faCubes, faBullhorn, faTasks, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HighlightsItem(props) {
    return (
    
        <>
            <div className='item-box'>
                <div className='item-header'>
                    <p className='item-title '>Consulut</p>
                    <FontAwesomeIcon icon={faComment} className='item-icon'/>
                </div>
                <div className='item-desc'>
                    <p>Co-create, design thinking; strengthen infrastructure resist granular.
                        Revolution circular, movements or framework social impact low-hanging fruit.
                        Save the world compelling revolutionary progress.</p>
                </div>
            </div>

            <div className='item-box'>
                <div className='item-header'>
                    <p className='item-title '>Design</p>
                    <FontAwesomeIcon icon={faPaintBrush} className='item-icon'/>
                </div>
                <div className='item-desc'>
                    <p>Co-create, design thinking; strengthen infrastructure resist granular.
                        Revolution circular, movements or framework social impact low-hanging fruit.
                        Save the world compelling revolutionary progress.</p>
                </div>
            </div>

            <div className='item-box'>
                <div className='item-header'>
                    <p className='item-title '>Develop</p>
                    <FontAwesomeIcon icon={faCubes} className='item-icon'/>
                </div>
                <div className='item-desc'>
                    <p>Co-create, design thinking; strengthen infrastructure resist granular.
                        Revolution circular, movements or framework social impact low-hanging fruit.
                        Save the world compelling revolutionary progress.</p>
                </div>
            </div>

            <div className='item-box'>
                <div className='item-header'>
                    <p className='item-title '>Marketing</p>
                    <FontAwesomeIcon icon={faBullhorn} className='item-icon'/>
                </div>
                <div className='item-desc'>
                    <p>Co-create, design thinking; strengthen infrastructure resist granular.
                        Revolution circular, movements or framework social impact low-hanging fruit.
                        Save the world compelling revolutionary progress.</p>
                </div>
            </div>

            <div className='item-box'>
                <div className='item-header'>
                    <p className='item-title '>Manage</p>
                    <FontAwesomeIcon icon={faTasks} className='item-icon'/>
                </div>
                <div className='item-desc'>
                    <p>Co-create, design thinking; strengthen infrastructure resist granular.
                        Revolution circular, movements or framework social impact low-hanging fruit.
                        Save the world compelling revolutionary progress.</p>
                </div>
            </div>

            <div className='item-box'>
                <div className='item-header'>
                    <p className='item-title '>Evolve</p>
                    <FontAwesomeIcon icon={faChartLine} className='item-icon'/>
                </div>
                <div className='item-desc'>
                    <p>Co-create, design thinking; strengthen infrastructure resist granular.
                        Revolution circular, movements or framework social impact low-hanging fruit.
                        Save the world compelling revolutionary progress.</p>
                </div>
            </div>
        </>
    )
}
