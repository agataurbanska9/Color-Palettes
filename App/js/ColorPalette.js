import React, {useState} from 'react';
import {Palette} from "./Palette";
import '../css/style.css';


export const ColorPalette = () => {
    const [color, setColor] = useState('red');
    const handleChange = (e) => {
        setColor(e.target.value);
    }
    return (
        <>
            <div>
                <div>
                    <select onChange={handleChange}>
                        <option value={'red'}>red</option>
                        <option value={'green'}>green</option>
                        <option value={'blue'}>blue</option>
                    </select>
                </div>
                <Palette color={color}/>
            </div>

        </>
    )
}