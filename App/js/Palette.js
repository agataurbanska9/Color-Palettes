import React, {useState} from 'react';
export const Palette = ({color}) => {

    const warmColors = ['lightyellow', 'snow', 'ghostwhite', 'seashell', 'floralwhite', 'ivory', 'beige', 'oldlace', 'antiquewhite']
    const coolColors = ['lightcyan', 'honeydew', 'mintcream', 'whitesmoke', 'lavenderblush', 'azure', 'aliceblue', 'linen', 'ghostwhite', 'lightcyan']
    const blue1 = ['powderblue', 'lightblue', 'lightskyblue', 'lightsteelblue', 'skyblue', 'dodgerblue', 'cornflowerblue', 'royalblue', 'rosybrown', 'dimgray', 'aquamarine', 'mediumaquamarine', 'paleturquoise', 'mediumturquoise']
    const blue2 = ['steelblue', 'blue', 'mediumblue', 'darkblue', 'navy', 'midnightblue', 'slateblue', 'darkslateblue', 'indigo', 'darkturquoise', 'lightseagreen', 'darkcyan', 'cadetblue', 'teal' ]
    const red1 = ['lightsalmon', 'salmon', 'darksalmon', 'lightcoral', 'indianred', 'coral', 'gold', 'orange', 'darkorange', 'tomato', 'darkkhaki', 'peachpuff'];
    const red2 = ['crimson', 'firebrick', 'darkred', 'orangered', 'maroon', 'brown', 'sienna', 'saddlebrown', 'goldenrod', 'chocolate']

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

    const style = {
        width: '200px',
        height: '100px',
    }

    return (
        <>
            {color==='blue' ? <>
                    <div style={{...style, background: coolColor}}>{coolColor}</div>
                    <div style={{...style, background: blueColor1}}>{blueColor1}</div>
                    <div style={{...style, background: blueColor2}}>{blueColor2}</div>
                </>
                : color==='red' ? <>
                        <div style={{...style, background: warmColor}}>{warmColor}</div>
                        <div style={{...style, background: redColor1}}>{redColor1}</div>
                        <div style={{...style, background: redColor2}}>{redColor2}</div>
                    </>
                    : <>
                        <div style={{...style, background: warmColor}}>{warmColor}</div>
                        <div style={{...style, background: redColor1}}>{redColor1}</div>
                        <div style={{...style, background: redColor2}}>{redColor2}</div>
                    </>

            }
            <p>{color}</p>

        </>
    )

}


