import React from "react";
import ReactDOM from "react-dom";
import {PlantData} from "./PlantData";
import {ColorPalette} from "./ColorPalette";

const App = () => <ColorPalette/>

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
