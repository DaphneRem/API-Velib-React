import React, { Component } from 'react';
import './Result.css';

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorStands : "green",
            colorBikes : "white"
        }
    }

        componentWillMount() { // se lance juste avant que le render() soit lancé
            console.log(this.props.availableBikes === 0);

            if (this.props.availableStands === 0) {
                return this.setState({ colorStands : "red" }); // devient rouge quand aucun stand n'est disponible
            }
            if (this.props.availableBikes === 0) { // devient rouge quand aucun vélo n'est disponible
                    return this.setState({ colorBikes : "red" });
            }
        };


  render() {

    return (
      <div className="Result">
        <h1>{this.props.name} </h1>
        <p>Place(s) disponible(s) :
            <span className="placesDisponibles" style={{color : this.state.colorStands}}> {this.props.availableStands}</span>
        </p>
        <p>Vélo(s) disponible(s) :
            <span className="velosDisponibles" style={{color : this.state.colorBikes}}>{this.props.availableBikes}</span>
        </p>
        <div className="border"></div>
      </div>
    );
  }
}

export default Result;
