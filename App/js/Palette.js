import React, {useState} from 'react';
import {ExampleBox} from "./ExampleBox";
import '../css/style.css';

export const Palette = ({color}) => {

    const warmColors = ['lightyellow', 'snow', 'ghostwhite', 'seashell', 'floralwhite', 'ivory', 'beige', 'oldlace', 'antiquewhite', 'cornsilk', 'blanchedalmond', 'bisque'];
    const coolColors = ['lightcyan', 'honeydew', 'mintcream', 'whitesmoke', 'lavenderblush', 'azure', 'aliceblue', 'linen', 'ghostwhite', 'lightcyan'];

    const warm1 = ['salmon', 'darksalmon', 'lightsalmon', 'pink', 'lightpink', 'darkorange', 'orange', 'gold', 'yellow', 'thistle', 'plum', 'burlywood', 'tan'];
    const warm2 = ['indianred', 'crimson', 'red', 'firebrick', 'darkred', 'lightcoral', 'hotpink','coral', 'tomato', 'orangered', 'saddlebrown', 'brown', 'maroon', 'sienna'];
    const azure1 = ['powderblue', 'lightblue', 'lightskyblue', 'lightsteelblue', 'skyblue', 'rosybrown', 'dimgray', 'aquamarine', 'mediumaquamarine', 'paleturquoise', 'mediumturquoise', 'springgreen', 'darkturquoise'];
    const azure2 = ['cornflowerblue', 'dodgerblue', 'royalblue', 'steelblue', 'blue', 'mediumblue', 'darkblue', 'navy', 'midnightblue', 'slateblue', 'darkslateblue', 'indigo', 'lightseagreen', 'darkcyan', 'cadetblue', 'teal' ];
    const funky1 = ['palevioletred', 'darkorange', 'darkkhaki', 'slateblue', 'palegreen', 'seagreen', 'rosybrown', 'chocolate', 'maroon', 'gainsboro', 'aqua'];
    const funky2 = ['deeppink', 'crimson', 'mediumvioletred', 'yellow' , 'fuchsia', 'lime', 'mediumspringgreen', 'teal', 'goldenrod', 'navy', 'limegreen' ];
    const office2 = ['darkkhaki', 'darkolivegreen', 'saddlebrown', 'sienna'];
    const office1 = ['gray', 'dimgray', 'lightslategray', 'slategray', 'darkslategray', 'black'];

    // const red1 = ['lightsalmon', 'salmon', 'darksalmon', 'lightcoral', 'indianred', 'coral', 'orange', 'darkorange', 'tomato', 'peachpuff', 'thistle', 'palegoldenrod'];
    // const red2 = ['crimson', 'firebrick', 'darkred', 'orangered', 'maroon', 'brown', 'sienna', 'saddlebrown', 'goldenrod', 'chocolate', 'darkmagenta', 'darkviolet', 'sandybrown', 'gold'];
    const grassy1 = ['lawngreen', 'chartreuse', 'limegreen', 'lime', 'greenyellow', 'yellowgreen', 'springgreen', 'lightgreen', 'palegreen', 'darkkhaki'];
    const grassy2 = ['forestgreen', 'green', 'darkgreen', 'darkseagreen', 'mediumseagreen', 'seagreen', 'olive', 'darkolivegreen', 'olivedrab', 'darkslategrey'];
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
                <div className={'box'} style={{background: coolColor}}><p>{coolColor}</p></div>
                <div className={'box'} style={{background: blueColor1}}><p>{blueColor1}</p></div>
                <div className={'box'} style={{background: blueColor2}}><p>{blueColor2}</p></div>
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