import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCrow } from '@fortawesome/free-solid-svg-icons';
import '../css/style.css';

export const Palette = ({color}) => {
    const warmColors = ['lightyellow', 'snow', 'ghostwhite', 'seashell', 'floralwhite', 'ivory', 'beige', 'oldlace', 'antiquewhite', 'palegoldenrod']
    const coolColors = ['lightcyan', 'honeydew', 'mintcream', 'whitesmoke', 'lavenderblush', 'azure', 'aliceblue', 'linen', 'ghostwhite', 'lightcyan']
    const blue1 = ['powderblue', 'lightblue', 'lightskyblue', 'lightsteelblue', 'skyblue', 'rosybrown', 'dimgray', 'aquamarine', 'mediumaquamarine', 'paleturquoise', 'mediumturquoise', 'springgreen', 'darkturquoise']
    const blue2 = ['cornflowerblue', 'dodgerblue', 'royalblue', 'steelblue', 'blue', 'mediumblue', 'darkblue', 'navy', 'midnightblue', 'slateblue', 'darkslateblue', 'indigo', 'lightseagreen', 'darkcyan', 'cadetblue', 'teal' ]
    const red1 = ['lightsalmon', 'salmon', 'darksalmon', 'lightcoral', 'indianred', 'coral', 'gold', 'orange', 'darkorange', 'tomato', 'peachpuff', 'thistle'];
    const red2 = ['crimson', 'firebrick', 'darkred', 'orangered', 'maroon', 'brown', 'sienna', 'saddlebrown', 'goldenrod', 'chocolate', 'darkmagenta', 'darkviolet', 'sandybrown']
    const green1 = ['lawngreen', 'chartreuse', 'limegreen', 'lime', 'greenyellow', 'yellowgreen', 'springgreen', 'lightgreen', 'palegreen', 'darkkhaki']
    const green2 = ['forestgreen', 'green', 'darkgreen', 'mediumspringgreen', 'darkseagreen', 'mediumseagreen', 'seagreen', 'olive', 'darkolivegreen', 'olivedrab', 'darkslategrey']
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
        <>
            {color==='blue' ?
                <>
                    <div className={'wrapper'}>
                        <div className={'one'}>
                            <div style={{...style, background: coolColor}}>{coolColor}</div>
                            <div style={{...style, background: blueColor1}}>{blueColor1}</div>
                            <div style={{...style, background: blueColor2}}>{blueColor2}</div>
                        </div>
                        <div className={'container2 two'}>
                            <div className={'nav'} style={{background: blueColor2}}><ul className={'nav_li'} style={{color: blueColor1, listStyleType: 'none', display: 'inline'}}><li><FontAwesomeIcon icon={faCrow} style={{fontSize: '2rem', color: blueColor1}}/></li><li>Home</li><li>About</li><li>Blog</li><li>Contact us</li></ul></div>
                            <div className={'text'} style={{background: coolColor, color:blueColor2}}><h1>Lorem ipsum</h1><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
                        </div>
                    </div>
                </>
                : color==='red' ?
                    <>
                        <div style={{...style, background: warmColor}}>{warmColor}</div>
                        <div style={{...style, background: redColor1}}>{redColor1}</div>
                        <div style={{...style, background: redColor2}}>{redColor2}</div>
                    </>
                    :
                    <>
                        <div style={{...style, background: coolColor}}>{coolColor}</div>
                        <div style={{...style, background: greenColor1}}>{greenColor1}</div>
                        <div style={{...style, background: greenColor2}}>{greenColor2}</div>
                    </>
            }
            </>
    )
}
