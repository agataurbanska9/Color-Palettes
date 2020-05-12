import React, {useState} from 'react';
import {Palette} from "./Palette";

export const Colors = ({color}) => {
    return (
        <>
            <Palette color={color}/>
            {/*<ExampleBox color={color}/>*/}
        </>
    )
}
