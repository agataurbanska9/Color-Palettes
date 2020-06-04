import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrow} from "@fortawesome/free-solid-svg-icons";
import '../css/style.css';


export const ExampleBox = ({col1, col2, col3}) => {
    return (
        <div className={'box_example'}>
            <div className={'nav'} style={{background: `#${col2.hex}`}}><ul className={'nav_li'} style={{color: `#${col3.hex}`, listStyleType: 'none', display: 'inline'}}><li><FontAwesomeIcon icon={faCrow} style={{fontSize: '2rem', color: `#${col3.hex}`}}/></li><li>Home</li><li>About</li><li>Blog</li><li>Contact us</li></ul></div>
            <div className={'text'} style={{background: `#${col1.hex}`, color:`#${col3.hex}`}}><h1>Lorem ipsum</h1><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        </div>
    )
}
