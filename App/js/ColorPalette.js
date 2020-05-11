import React, {useState} from 'react';
import {Palette} from "./Palette";

export const ColorPalette = () => {
    const [color, setColor] = useState('red');
    const handleChange = (e) => {
        setColor(e.target.value);
    }
    return (
        <>
            <h3 style={{color: color}}>color: red</h3>
            <select onChange={handleChange}>
                <option value={'red'}>red</option>
                <option value={'green'}>green</option>
                <option value={'blue'}>blue</option>
            </select>
            <Palette color={color}/>
        </>
    )
}