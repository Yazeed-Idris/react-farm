import React from "react";

export class PlantPot extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <h1>{this.props.plant.name}</h1>
                {this.props.plant.timeToGrow ? <p>{this.props.plant.timeToGrow} days</p> : <p>Grown!</p>}
            </div>
        );
    }
}




