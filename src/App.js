import './App.css';
import {PlantPot} from "./components/Plant/PlantPot";
import {Hotbar} from "./components/Hotbar/Hotbar";
import React from "react";
import {logDOM} from "@testing-library/react";

const plants = [
]

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plants: plants,
            selectedPlantId: 0,
        }
        this.addPlant = this.addPlant.bind(this);
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

    addPlant(event, plantName) {
        this.setState((prevState) => ({

            plants: [
                ...prevState.plants,
               this.getPlantObj(plantName)
            ],
        }));
        console.log('event: ', event, plantName);

    }

    getPlantObj(plantName) {
        switch (plantName) {
            case 'Watermelon':
                return {
                    name: 'Watermelon',
                    timeRemaining: 23,
                    timeToGrow: 23,
                    dateCreated: new Date(),
                }
            case 'Carrot':
                return {
                    name: 'Carrot',
                    timeRemaining: 32,
                    timeToGrow: 32,
                    dateCreated: new Date(),
                }
            case 'Tomato':
                return {
                    name: 'Tomato',
                    timeRemaining: 25,
                    timeToGrow: 25,
                    dateCreated: new Date(),
                }
        }
    }

    render() {
        const crops = this.state.plants.map((plant, index) => {
            return <div key={index} ><PlantPot plant={plant} /></div>
        });
        return <div className="flex justify-center items-start h-max w-4/5 mx-auto my-auto">
            <div className={`shadow-black/25 shadow-lg flex gap-4 border-2 border-amber-50 mt-8 mb-20 p-4 bg-amber-100 flex-wrap justify-center items-center ${!this.state.plants.length? 'w-64 h-72' : ''}`}>{crops}</div>
           <Hotbar addPlantHandler={this.addPlant} />
        </div>
    }
}

export default App;
