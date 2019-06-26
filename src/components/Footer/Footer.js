import React, {useState} from 'react'
import './styles.css'
import EmailBar from '../EmailBar/EmailBar'

export default function Footer() {

    const [state, setstate] = useState(true)
    const handleClick = () => setstate(false)
    return (
        <>
            <div className='footer'>
                <div className='footer-item'>@2018 Janto Motulo. All rights reserved</div>
                
            </div>
            {state ? <EmailBar handleToggle={handleClick}/> : null}
           
        </>
    )
}
