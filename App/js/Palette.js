import React, {useState} from 'react';
import {ExampleBox} from "./ExampleBox";
import '../css/style.css';

export const Palette = ({color}) => {
//--> color arrays
    let warmColors = [
        {name: 'light yellow', hex: 'FFFFE0'}, {name: 'snow', hex: 'FFFAFA'},
        {name: 'ghost white', hex: 'F8F8FF'}, {name: 'sea shell', hex: 'FFF5EE'},
        {name: 'floral white', hex: 'FFFAF0'}, {name: 'ivory', hex: 'FFFFF0'},
        {name: 'beige', hex: 'F5F5DC'}, {name: 'old lace', hex: 'FDF5E6'},
        {name: 'antique white', hex: 'FAEBD7'}, {name: 'corn silk', hex: 'FFF8DC'},
        {name: 'blanchedalmond', hex: 'FFEBCD'}, {name: 'bisque', hex: 'FFE4C4'}];

    let coolColors = ['lightcyan', 'honeydew', 'mintcream', 'whitesmoke', 'lavenderblush', 'azure', 'aliceblue', 'linen', 'ghostwhite', 'lightcyan'];
    let warm1 = ['salmon', 'darksalmon', 'lightsalmon', 'pink', 'lightpink', 'orange', 'gold', 'yellow', 'thistle', 'plum', 'burlywood', 'tan'];
    let warm2 = ['indianred', 'crimson', 'red', 'firebrick', 'darkred', 'lightcoral', 'hotpink','coral', 'tomato', 'orangered', 'saddlebrown', 'brown', 'maroon', 'sienna',  'darkorange'];
    let azure1 = ['cadetblue', 'powderblue', 'lightblue', 'lightskyblue', 'lightsteelblue', 'skyblue', 'rosybrown', 'dimgray', 'aquamarine', 'mediumaquamarine', 'paleturquoise', 'mediumturquoise', 'springgreen', 'darkturquoise'];
    let azure2 = ['cornflowerblue', 'dodgerblue', 'royalblue', 'steelblue', 'blue', 'mediumblue', 'darkblue', 'navy', 'midnightblue', 'slateblue', 'darkslateblue', 'indigo', 'lightseagreen', 'darkcyan', 'teal' ];
    let funky1 = ['palevioletred', 'darkorange', 'darkkhaki', 'slateblue', 'palegreen', 'seagreen', 'rosybrown', 'chocolate', 'maroon', 'gainsboro', 'aqua'];
    let funky2 = ['deeppink', 'crimson', 'mediumvioletred', 'yellow' , 'fuchsia', 'lime', 'mediumspringgreen', 'teal', 'goldenrod', 'navy', 'limegreen' ];
    let office2 = ['darkkhaki', 'darkolivegreen', 'saddlebrown', 'sienna'];
    let office1 = ['gray', 'dimgray', 'lightslategray', 'slategray', 'darkslategray', 'black'];
    let grassy1 = ['lawngreen', 'chartreuse', 'limegreen', 'lime', 'greenyellow', 'yellowgreen', 'springgreen', 'lightgreen', 'palegreen', 'darkkhaki'];
    let grassy2 = ['forestgreen', 'green', 'darkgreen', 'darkseagreen', 'mediumseagreen', 'seagreen', 'olive', 'darkolivegreen', 'olivedrab', 'darkslategrey'];
    const getRandomColor = (array) => {
        const randomColor = array[Math.floor(Math.random()*array.length)];
        return randomColor;
    }

    const warmColor = getRandomColor(warmColors);
    const coolColor = getRandomColor(coolColors);
    const warm1Color = getRandomColor(warm1);
    const warm2Color = getRandomColor(warm2);
    const blueColor1 = getRandomColor(azure1);
    const blueColor2 = getRandomColor(azure2);
    const funkyColor1 = getRandomColor(funky1);
    const funkyColor2 = getRandomColor(funky2);
    const officeColor1 = getRandomColor(office1);
    const officeColor2 = getRandomColor(office2);
    const grassyColor1 = getRandomColor(grassy1);
    const grassyColor2 = getRandomColor(grassy2);

    return (
        color==='azure' ?
            <>
            <div className={'palette'}>
                <div className={'box'} style={{background: coolColor.name}}><p>{coolColor.name}</p></div>
                <div className={'box'} style={{background: blueColor1.name}}><p>{blueColor1.name}</p></div>
                <div className={'box'} style={{background: blueColor2.name}}><p>{blueColor2.name}</p></div>
            </div>
                <ExampleBox col1={coolColor} col2={blueColor1} col3={blueColor2}/>
            </>
            : color==='warm' ?
            <>
            <div className={'palette'}>
                <div className={'box'} style={{background: warmColor}}><p>{warmColor}</p></div>
                <div className={'box'} style={{background: warm1Color}}><p>{warm1Color}</p></div>
                <div className={'box'} style={{background: warm2Color}}><p>{warm2Color}</p></div>
            </div>
                <ExampleBox  col1={warmColor} col2={warm1Color} col3={warm2Color}/>
            </>
            : color==='grassy' ?
                <>
                    <div className={'palette'}>
                        <div className={'box'} style={{background: coolColor}}><p>{coolColor}</p></div>
                        <div className={'box'} style={{background: grassyColor1}}><p>{grassyColor1}</p></div>
                        <div className={'box'} style={{background: grassyColor2}}><p>{grassyColor2}</p></div>
                    </div>
                    <ExampleBox  col1={coolColor} col2={grassyColor1} col3={grassyColor2}/>
                </>
            : color==='funky' ?
                    <>
                        <div className={'palette'}>
                            <div className={'box'} style={{background: coolColor}}><p>{coolColor}</p></div>
                            <div className={'box'} style={{background: funkyColor1}}><p>{funkyColor1}</p></div>
                            <div className={'box'} style={{background: funkyColor2}}><p>{funkyColor2}</p></div>
                        </div>
                        <ExampleBox  col1={coolColor} col2={funkyColor1} col3={funkyColor2}/>
                    </>
                    :
                    <>
                        <div className={'palette'}>
                            <div className={'box'} style={{background: warmColor}}><p>{warmColor}</p></div>
                            <div className={'box'} style={{background: officeColor1}}><p>{officeColor1}</p></div>
                            <div className={'box'} style={{background: officeColor2}}><p>{officeColor2}</p></div>
                        </div>
                        <ExampleBox  col1={warmColor} col2={officeColor1} col3={officeColor2}/>
                    </>



    )
}