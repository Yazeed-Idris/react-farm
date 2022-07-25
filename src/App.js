import './App.css';
import {PlantPot} from "./components/Plant/PlantPot";
import {Hotbar} from "./components/Hotbar/Hotbar";
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
    },
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
            return <div><PlantPot plant={plant} key={index}/></div>
        });
        return <div className="App flex justify-center items-center">
            <div className={'grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 '}>{crops}</div>
           <Hotbar />
        </div>


    }
}

export default App;
