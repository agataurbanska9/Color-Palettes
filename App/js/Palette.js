import React, {useState} from 'react';
import {ExampleBox} from "./ExampleBox";
import '../css/style.css';

export const Palette = (props) => {
    const warmColors = ['lightyellow', 'snow', 'ghostwhite', 'seashell', 'floralwhite', 'ivory', 'beige', 'oldlace', 'antiquewhite']
    const coolColors = ['lightcyan', 'honeydew', 'mintcream', 'whitesmoke', 'lavenderblush', 'azure', 'aliceblue', 'linen', 'ghostwhite', 'lightcyan']
    const blue1 = ['powderblue', 'lightblue', 'lightskyblue', 'lightsteelblue', 'skyblue', 'rosybrown', 'dimgray', 'aquamarine', 'mediumaquamarine', 'paleturquoise', 'mediumturquoise', 'springgreen', 'darkturquoise']
    const blue2 = ['cornflowerblue', 'dodgerblue', 'royalblue', 'steelblue', 'blue', 'mediumblue', 'darkblue', 'navy', 'midnightblue', 'slateblue', 'darkslateblue', 'indigo', 'lightseagreen', 'darkcyan', 'cadetblue', 'teal' ]
    const red1 = ['lightsalmon', 'salmon', 'darksalmon', 'lightcoral', 'indianred', 'coral', 'orange', 'darkorange', 'tomato', 'peachpuff', 'thistle', 'palegoldenrod'];
    const red2 = ['crimson', 'firebrick', 'darkred', 'orangered', 'maroon', 'brown', 'sienna', 'saddlebrown', 'goldenrod', 'chocolate', 'darkmagenta', 'darkviolet', 'sandybrown', 'gold']
    const green1 = ['mediumspringgreen', 'lawngreen', 'chartreuse', 'limegreen', 'lime', 'greenyellow', 'yellowgreen', 'springgreen', 'lightgreen', 'palegreen', 'darkkhaki']
    const green2 = ['forestgreen', 'green', 'darkgreen', 'darkseagreen', 'mediumseagreen', 'seagreen', 'olive', 'darkolivegreen', 'olivedrab', 'darkslategrey']
    const getRandomColor = (array) => {
        const randomColor = array[Math.floor(Math.random()*array.length)];
        return randomColor;
    }
    const warmColor = getRandomColor(warmColors);
    const coolColor = getRandomColor(coolColors);
    const blueColor1 = getRandomColor(blue1);
    const blueColor2 = getRandomColor(blue2);
    const redColor1 = getRandomColor(red1);
    const redColor2 = getRandomColor(red2);
    const greenColor1 = getRandomColor(green1);
    const greenColor2 = getRandomColor(green2);
    const style = {
        width: '200px',
        height: '100px',
    }
    return (
        props.color==='blue' ?
            <>
            <div className={'palette'}>
                <div className={'box'} style={{...style, background: coolColor}}>{coolColor}</div>
                <div className={'box'} style={{...style, background: blueColor1}}>{blueColor1}</div>
                <div className={'box'} style={{...style, background: blueColor2}}>{blueColor2}</div>
            </div>
                <ExampleBox col1={coolColor} col2={blueColor1} col3={blueColor2}/>
            </>
            : props.color==='red' ?
            <>
            <div className={'palette'}>
                <div style={{...style, background: warmColor}}>{warmColor}</div>
                <div style={{...style, background: redColor1}}>{redColor1}</div>
                <div style={{...style, background: redColor2}}>{redColor2}</div>
            </div>
                <ExampleBox  col1={warmColor} col2={redColor1} col3={redColor2}/>
            </>
            :
            <>
            <div className={'palette'}>
                <div style={{...style, background: coolColor}}>{coolColor}</div>
                <div style={{...style, background: greenColor1}}>{greenColor1}</div>
                <div style={{...style, background: greenColor2}}>{greenColor2}</div>
            </div>
                <ExampleBox  col1={coolColor} col2={greenColor1} col3={greenColor2}/>
            </>
    )
}