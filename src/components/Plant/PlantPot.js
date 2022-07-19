import React from "react";
import watermelonImage from '../../assets/images/watermelon.png';
import tomato from '../../assets/images/tomato.png';
import carrot from '../../assets/images/carrot.png';
import './size.css'

export class PlantPot extends React.Component {

    render() {
        const { plant } = this.props;
        return (
            <div className='block p-6 rounded-lg border border-gray-200 max-w-full shadow-md flex-col justify-center items-center'>
                <div className={'flex justify-center items-center'}><PlantImage plant={plant}/></div>
                {plant.timeRemaining ? <p>{plant.timeRemaining} days</p> : <p>Grown!</p>}
            </div>
        );
    }
}

const PlantImage = ({ plant }) => {
    let choice = null
    switch (plant.name) {
        case 'Watermelon':
           choice = watermelonImage
           break;
        case 'Carrot':
           choice = carrot;
           break;
        case 'Tomato':
           choice = tomato;
           break;
        default:
            return <div>No image</div>;
    }
        return <img className={plant.timeRemaining ? plant.timeRemaining > plant.timeToGrow/2 ? 'small' : 'medium' : 'large'} src={choice} alt={plant.name} />
}


