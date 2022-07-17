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
                       timeToGrow: plant.timeToGrow > 0 ? plant.timeToGrow - 1 : 0,
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
