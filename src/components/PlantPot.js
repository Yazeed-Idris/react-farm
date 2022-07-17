import React from "react";

export class PlantPot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plant: this.props.plant,
            grown: false,
        }
    }

    componentDidMount() {
        if (this.state.grown) return;
        this.interval = setInterval(() => {

            if (this.state.plant.timeToGrow > 0) {
                this.setState((prevState) => ({
                    plant: {
                        ...prevState.plant,
                        timeToGrow: prevState.plant.timeToGrow - 1,
                    }
                }))
            }
            if (this.state.plant.timeToGrow === 0) {
               this.setState({
                   grown: true,
               });
           }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>{this.state.plant.name}</h1>
                <p>{this.state.plant.datePlanted}</p>
                {this.state.plant.timeToGrow ? <p>{this.state.plant.timeToGrow} days</p> : <p>Grown!</p>}
                <p>{this.props.key}</p>
            </div>
        );
    }
}




