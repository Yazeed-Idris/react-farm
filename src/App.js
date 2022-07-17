import './App.css';
import {PlantPot} from "./components/PlantPot";
import React from "react";

const plants = [
    {
        name: 'Watermelon',
        timeToGrow: 13,
    },
    {
        name: 'Cantaloupe',
        timeToGrow: 15,
    },
    {
        name: 'Pumpkin',
        timeToGrow: 15,
    },
    {
        name: 'Carrot',
        timeToGrow: 32,
    },
    {
        name: 'Cucumber',
        timeToGrow: 20,
    },
    {
        name: 'Tomato',
        timeToGrow: 0,
    }
]

export class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const crops = plants.map((plant, index) => {
            return <PlantPot plant={plant} key={index} />
        });
        return <div className="App">
                {crops}
            </div>

    }
}

export default App;
