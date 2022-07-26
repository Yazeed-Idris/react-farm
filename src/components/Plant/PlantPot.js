import React from "react";
import './size.css'

export class PlantPot extends React.Component {

    render() {
        const { plant } = this.props;
        return (
            plant.name?
            <div className='block p-4 bg-white rounded-lg border border-gray-200  shadow-md flex-col justify-center items-center'>
                <div className={'flex justify-center items-center'}><PlantImage plant={plant}/></div>
                {plant.timeRemaining ? <p>{plant.timeRemaining} days</p> : <p>Grown!</p>}
            </div> : <div className={'block p-6 rounded-lg border border-gray-200 h-full shadow-md flex-col justify-center items-center bg-white'}>hello</div>
        );
    }
}

const PlantImage = ({ plant }) => {
        return <img  className={`object-scale-down h-48 w-48 ${plant.timeRemaining ? plant.timeRemaining > plant.timeToGrow/2 ? 'small' : 'medium' : 'large'}`} src={`/assets/images/${plant.name.toLowerCase()}.png`} alt={plant.name} />
}


