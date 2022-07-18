import React from "react";

export class PlantPot extends React.Component {

    render() {
        return (
            <div className='block p-6 rounded-lg border border-gray-200 max-w-full shadow-md'>
                    <h1>{this.props.plant.name}</h1>
                    {this.props.plant.timeToGrow ? <p>{this.props.plant.timeToGrow} days</p> : <p>Grown!</p>}
            </div>
        );
    }
}




