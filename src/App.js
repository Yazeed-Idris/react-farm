import './App.css';
import {PlantPot} from "./components/Plant/PlantPot";
import {Hotbar} from "./components/Hotbar/Hotbar";
import React from "react";

const plants = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

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
            selectedPlantId: 0,
        }
        this.selectRight = this.selectRight.bind(this);
        this.selectLeft = this.selectLeft.bind(this);
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

    selectRight() {
       this.setState((prevState) => ({
           selectedPlantId: prevState.selectedPlantId + 1 > prevState.plants.length - 1 ? 0 : prevState.selectedPlantId + 1,
       }));
    }

    selectLeft() {
        this.setState((prevState) => ({
            selectedPlantId: prevState.selectedPlantId - 1 < 0 ? prevState.plants.length - 1 : prevState.selectedPlantId - 1,
        }));
    }

    render() {
        const crops = this.state.plants.map((plant, index) => {
            return <div key={index} className={`col-span-1${(this.state.selectedPlantId === index && ' selected') || ''}`}><PlantPot plant={plant} /></div>
        });
        return <div className="App flex justify-center items-center pb-28 md:pb-36 lg:pb-44 xl:pb-48 pt-4">
            <button onClick={this.selectLeft} type='button' className={'mr-4 bg-grass-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>{'<'}</button>
            <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 '}>{crops}</div>
            <button onClick={this.selectRight} type='button' className={'ml-4 bg-grass-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>{'>'}</button>
           <Hotbar />
        </div>


    }
}

// h-20 w-20 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-40 xl:w-40

export default App;
