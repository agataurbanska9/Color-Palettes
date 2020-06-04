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
        {name: 'blanched almond', hex: 'FFEBCD'}, {name: 'bisque', hex: 'FFE4C4'}];

    let coolColors = [
        {name: 'light cyan', hex: 'E0FFFF'}, {name: 'honeydew', hex: 'F0FFF0'},
        {name: 'mint cream', hex: 'F5FFFA'}, {name: 'white smoke', hex: 'F5F5F5'},
        {name: 'lavender blush', hex: 'FFF0F5'}, {name: 'azure', hex: 'F0FFFF'},
        {name: 'alice blue', hex: 'F0F8FF'}, {name: 'linen', hex: 'FAF0E6'},
        {name: 'ghost white', hex: 'F8F8FF'}];

    let warm1 = [
        {name: 'salmon', hex: 'FA8072'}, {name: 'dark salmon', hex: 'E9967A'},
        {name: 'light salmon', hex: 'FFA07A'}, {name: 'pink', hex: 'FFC0CB'},
        {name: 'light pink', hex: 'FFB6C1'}, {name: 'orange', hex: 'FFA500'},
        {name: 'gold', hex: 'FFD700'}, {name: 'yellow', hex: 'FFFF00'},
        {name: 'thistle', hex: 'D8BFD8'}, {name: 'plum', hex: 'DDA0DD'},
        {name: 'burly wood', hex: 'DEB887'}, {name: 'tan', hex: 'D2B48C'}];

    let warm2 = [
        {name: 'indian red', hex: 'CD5C5C'}, {name: 'crimson', hex: 'DC143C'},
        {name: 'red', hex: 'FF0000'}, {name: 'firebrick', hex: 'B22222'},
        {name: 'dark red', hex: '8B0000'}, {name: 'light coral', hex: 'F08080'},
        {name: 'hot pink', hex: 'FF69B4'}, {name: 'coral', hex: 'FF7F50'},
        {name: 'tomato', hex: 'FF6347'}, {name: 'orange red', hex: 'FF4500'},
        {name: 'saddle brown', hex: '8B4513'}, {name: 'brown', hex: 'A52A2A'},
        {name: 'maroon', hex: '800000'}, {name: 'sienna', hex: 'A0522D'},
        {name: 'dark orange', hex: 'FF8C00'}];

    let azure1 = [
        {name: 'cadet blue', hex: '5F9EA0'}, {name: 'powder blue', hex: 'B0E0E6'},
        {name: 'light blue', hex: 'ADD8E6'}, {name: 'light sky blue', hex: '87CEFA'},
        {name: 'lightsteelblue', hex: 'B0C4DE'}, {name: 'sky blue', hex: '87CEEB'},
        {name: 'rosy brown', hex: 'BC8F8F'}, {name: 'dim gray', hex: '696969'},
        {name: 'aqua marine', hex: '7FFFD4'}, {name: 'medium aqua marine', hex: '66CDAA'},
        {name: 'pale turquoise', hex: 'AFEEEE'}, {name: 'medium turquoise', hex: '48D1CC'},
        {name: 'turquoise', hex: '40E0D0'}, {name: 'spring green', hex: '00FF7F'},
        {name: 'dark turquoise', hex: '00CED1'}];

    let azure2 = [
        {name: 'corn flower blue', hex: '6495ED'}, {name: 'dodger blue', hex: '1E90FF'},
        {name: 'royal blue', hex: '4169E1'}, {name: 'steel blue',hex: '4682B4'},
        {name: 'blue', hex: '0000FF'}, {name: 'medium blue', hex: '0000CD'},
        {name: 'dark blue', hex: '00008B'}, {name: 'navy', hex: '000080'},
        {name: 'midnight blue', hex: '191970'}, {name: 'slate blue', hex: '6A5ACD'},
        {name: 'dark slate blue', hex: '483D8B'}, {name: 'indigo', hex: '4B0082'},
        {name: 'light sea green', hex: '20B2AA'}, {name: 'darkcyan', hex: '008B8B'},
        {name: 'teal', hex: '008080'}];

    let funky1 = [
        {name: 'palevioletred', hex: 'DB7093'}, {name: 'dark orange', hex: 'FF8C00'},
        {name: 'dark khaki', hex: 'BDB76B'}, {name: 'slate blue', hex: '6A5ACD'},
        {name: 'pale green', hex: '98FB98'}, {name: 'sea green', hex: '2E8B57'},
        {name: 'rosy brown', hex: 'BC8F8F'}, {name: 'chocolate', hex: 'D2691E'},
        {name: 'maroon', hex: '800000'}, {name: 'gainsboro', hex: 'DCDCDC'},
        {name: 'aqua', hex: '00FFFF'}];

    let funky2 = [
        {name: 'deep pink', hex: 'FF1493'}, {name: 'crimson', hex: 'DC143C'},
        {name: 'medium violet red', hex: 'C71585'}, {name: 'yellow', hex: 'FFFF00'},
        {name: 'fuchsia', hex: 'FF00FF'}, {name: 'lime', hex: '00FF00'},
        {name: 'medium spring green', hex: '00FA9A'}, {name: 'teal', hex: '008080'},
        {name: 'goldenrod', hex: 'DAA520'}, {name: 'navy', hex: '000080'},
        {name: 'lime green', hex: '32CD32'}];

    let office2 = [
        {name: 'dark khaki', hex: 'BDB76B'}, {name: 'dark olive green', hex: '556B2F'},
        {name: 'saddle brown', hex: '8B4513'}, {name: 'sienna', hex: 'A0522D'}];

    let office1 = [
        {name: 'gray', hex: '808080'}, {name: 'dim gray', hex: '696969'},
        {name: 'light slate gray', hex: '778899'}, {name: 'slate gray', hex: '708090'},
        {name: 'dark slate gray', hex: '2F4F4F'}, {name: 'black', hex: '000000'}];

    let grassy1 = [
        {name: 'lawn green', hex: '7CFC00'}, {name: 'chart reuse', hex: '7FFF00'},
        {name: 'lime green', hex: '32CD32'}, {name: 'lime', hex: '00FF00'},
        {name: 'green yellow', hex: 'ADFF2F'}, {name: 'yellow green', hex: '9ACD32'},
        {name: 'spring green', hex: '00FF7F'}, {name: 'light green', hex: '90EE90'},
        {name: 'pale green', hex: '98FB98'}, {name: 'dark khaki', hex: 'BDB76B'}];

    let grassy2 = [
        {name: 'forest green', hex: '228B22'}, {name: 'green', hex: '008000'},
        {name: 'dark green', hex: '006400'}, {name: 'dark sea green', hex: '8FBC8F'},
        {name: 'medium sea green', hex: '3CB371'}, {name: 'sea green', hex: '2E8B57'},
        {name: 'olive', hex: '808000'}, {name: 'dark olive green', hex: '556B2F'},
        {name: 'olive drab', hex: '6B8E23'}, {name: 'dark slate grey', hex: '2F4F4F'}];

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
                <div className={'box'} style={{background: `#${coolColor.hex}`}}><p>{coolColor.name}</p></div>
                <div className={'box'} style={{background: `#${blueColor1.hex}`}}><p>{blueColor1.name}</p></div>
                <div className={'box'} style={{background: `#${blueColor2.hex}`}}><p>{blueColor2.name}</p></div>
            </div>
                <ExampleBox col1={coolColor} col2={blueColor1} col3={blueColor2}/>
            </>
            : color==='warm' ?
            <>
            <div className={'palette'}>
                <div className={'box'} style={{background: warmColor}}><p>{warmColor.name}</p></div>
                <div className={'box'} style={{background: warm1Color}}><p>{warm1Color.name}</p></div>
                <div className={'box'} style={{background: warm2Color}}><p>{warm2Color.name}</p></div>
            </div>
                <ExampleBox  col1={warmColor} col2={warm1Color} col3={warm2Color}/>
            </>
            : color==='grassy' ?
                <>
                    <div className={'palette'}>
                        <div className={'box'} style={{background: coolColor}}><p>{coolColor.name}</p></div>
                        <div className={'box'} style={{background: grassyColor1}}><p>{grassyColor1.name}</p></div>
                        <div className={'box'} style={{background: grassyColor2}}><p>{grassyColor2.name}</p></div>
                    </div>
                    <ExampleBox  col1={coolColor} col2={grassyColor1} col3={grassyColor2}/>
                </>
            : color==='funky' ?
                    <>
                        <div className={'palette'}>
                            <div className={'box'} style={{background: coolColor}}><p>{coolColor.name}</p></div>
                            <div className={'box'} style={{background: funkyColor1}}><p>{funkyColor1.name}</p></div>
                            <div className={'box'} style={{background: funkyColor2}}><p>{funkyColor2.name}</p></div>
                        </div>
                        <ExampleBox  col1={coolColor} col2={funkyColor1} col3={funkyColor2}/>
                    </>
                    :
                    <>
                        <div className={'palette'}>
                            <div className={'box'} style={{background: warmColor}}><p>{warmColor.name}</p></div>
                            <div className={'box'} style={{background: officeColor1}}><p>{officeColor1.name}</p></div>
                            <div className={'box'} style={{background: officeColor2}}><p>{officeColor2.name}</p></div>
                        </div>
                        <ExampleBox  col1={warmColor} col2={officeColor1} col3={officeColor2}/>
                    </>



    )
}