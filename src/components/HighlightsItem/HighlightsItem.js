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
                    <p>Policymaker collaborative collective humanitarian shared valued vocabulary inspire issue
                    outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground
                    sustainable</p>
                </div>
            </div>

            <div className='item-box'>
                <div className='item-header'>
                    <p className='item-title '>Develop</p>
                    <FontAwesomeIcon icon={faCubes} className='item-icon'/>
                </div>
                <div className='item-desc'>
                    <p>Revolutionary circular, movements a or impact framework social impact low-hanging. 
                    Save the compelling revolutionary inspire progress. Collective impacts and challenges
                    for opportunities of thought provoking.</p>
                </div>
            </div>

            <div className='item-box'>
                <div className='item-header'>
                    <p className='item-title '>Marketing</p>
                    <FontAwesomeIcon icon={faBullhorn} className='item-icon'/>
                </div>
                <div className='item-desc'>
                    <p>Peaceful: vibrant paradigm, collaborative cities. Share vocabulary agile, replicable,
                    effective altruism youth. Mobile commitment to overcome injustice resilient, uplift social
                    transparent effective</p>
                </div>
            </div>

            <div className='item-box'>
                <div className='item-header'>
                    <p className='item-title '>Manage</p>
                    <FontAwesomeIcon icon={faTasks} className='item-icon'/>
                </div>
                <div className='item-desc'>
                    <p>Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize
                    vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate
                    social</p>
                </div>
            </div>

            <div className='item-box'>
                <div className='item-header'>
                    <p className='item-title '>Evolve</p>
                    <FontAwesomeIcon icon={faChartLine} className='item-icon'/>
                </div>
                <div className='item-desc'>
                    <p>Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism.
                    Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.</p>
                </div>
            </div>
        </>
    )
}
