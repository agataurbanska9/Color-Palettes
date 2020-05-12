import React, {useState} from 'react';
import {Colors} from "./Colors";
import '../css/style.css';


export const ChooseColorSection = () => {
    const [color, setColor] = useState('red');
    const handleChange = (e) => {
        setColor(e.target.value);
    }
    return (
        <>
            <div className={'header'}>
                <h1>Choose your main color!</h1>
                <div>
                    <select onChange={handleChange}>
                        <option value={'red'}>red</option>
                        <option value={'green'}>green</option>
                        <option value={'blue'}>blue</option>
                    </select>
                </div>
                <Colors color={color}/>
            </div>

        </>
    )
}