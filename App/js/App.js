import React from "react";
import ReactDOM from "react-dom";
import {PlantData} from "./PlantData";
import {ChooseColorSection} from "./ChooseColorSection";
import '../css/style.css';

const App = () => <ChooseColorSection className={'container'}/>

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
