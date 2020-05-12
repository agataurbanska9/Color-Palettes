import React, {useState} from 'react';
import {Palette} from "./Palette";
import '../css/style.css';

export const ChooseColorSection = () => {
    const [color, setColor] = useState('warm');
    const handleChange = (e) => {
        setColor(e.target.value);
    }
    return (
        <>
            <div className={'header'}>
                <div className={'option'}>
                    <p>Choose your theme</p>
                    <div>
                        <select onChange={handleChange}>
                            <option value={'warm'}>warm</option>
                            <option value={'azure'}>azure</option>
                            <option value={'grassy'}>grassy</option>
                            <option value={'funky'}>funky</option>
                            <option value={'office'}>office party</option>
                        </select>
                    </div>
                </div>
                <Palette color={color}/>
            </div>

        </>
    )
}