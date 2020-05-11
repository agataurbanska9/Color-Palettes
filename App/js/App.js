import React from "react";
import ReactDOM from "react-dom";
import {PlantData} from "./PlantData";
import {ColorPalette} from "./ColorPalette";
import '../css/style.css';

const App = () => <ColorPalette/>

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
