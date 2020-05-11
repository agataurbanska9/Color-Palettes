import React, {useState} from 'react';

export const ColorPalette = () => {
    const [color, setColor] = useState('red');
    const [array, setArray] = useState(['red', 'orange', 'yellow'])

    const handleChange = (e) => {
        setColor(e.target.value);

    }
    const warmColors = ['lightyellow', 'snow', 'ghostwhite', 'seashell', 'floralwhite', 'ivory', 'beige', 'oldlace', 'antiquewhite']
    const coolColors = ['lightcyan', 'honeydew', 'mintcream', 'whitesmoke', 'lavenderblush', 'azure', 'aliceblue', 'linen', 'ghostwhite']
    const blues1 = ['powderblue', 'lightblue', 'lightskyblue', 'lightsteelblue', 'skyblue', 'dodgerblue', 'cornflowerblue', 'royalblue']
    const blues2 = ['steelblue', 'blue', 'mediumblue', 'darkblue', 'navy', 'midnightblue', 'slateblue', 'darkslateblue', 'indigo']

    const randomElement = array[Math.floor(Math.random()*array.length)];


    return (
        <>
            <h3 style={{color: color}}>color: red</h3>
            <select onChange={handleChange}>
                <option value={'red'}>red</option>
                <option value={'green'}>green</option>
                <option value={'blue'}>blue</option>
            </select>
        </>
    )
}