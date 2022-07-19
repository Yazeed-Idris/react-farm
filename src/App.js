import './App.css';
import {PlantPot} from "./components/Plant/PlantPot";
import React from "react";

const plants = [
    {
        name: 'Watermelon',
        timeRemaining: 10,
        timeToGrow: 23,
    },
    {
        name: 'Carrot',
        timeRemaining: 32,
        timeToGrow: 32,
    },
    {
        name: 'Tomato',
        timeRemaining: 25,
        timeToGrow: 25,
    }
]

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plants: plants,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                plants: prevState.plants.map((plant) => {
                    return {
                        ...plant,
                        timeRemaining: plant.timeRemaining > 0 ? plant.timeRemaining - 1 : 0,
                    }
                }),
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const crops = this.state.plants.map((plant, index) => {
            return <PlantPot plant={plant} key={index}/>
        });
        return <div className="App">
            {crops}

        </div>

    }
}

export default App;
