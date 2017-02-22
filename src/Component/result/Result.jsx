import React, { Component } from 'react';
import './Result.css';
import Map from '../map/Map';

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorStands : "green",
            colorBikes : "white",
            showComponent: false
        }
        this.miniModal = this.miniModal.bind(this);
    }

        componentWillMount() { // se lance juste avant que le render() soit lancé
            if ((this.props.availableStands === 0) && (this.props.availableBikes === 0)) {
                return this.setState({colorStands : "red", colorBikes : "red"});
            }
            if (this.props.availableStands === 0) {
                return this.setState({ colorStands : "red" }); // devient rouge quand aucun stand n'est disponible
            }
            if (this.props.availableBikes === 0) { // devient rouge quand aucun vélo n'est disponible
                    return this.setState({ colorBikes : "red" });
            }
        };
        miniModal() {
            console.log(this.state.display);
            this.setState({ showComponent: !this.state.showComponent,});
        };



  render() {

    return (
        <div className="Result">
            <div className="top">
                <div className="left">
                    <h1>{this.props.name} </h1>
                    <p>Place(s) disponible(s) :
                        <span className="placesDisponibles" style={{color : this.state.colorStands}}> {this.props.availableStands}</span>
                    </p>
                    <p>Vélo(s) disponible(s) :
                        <span className="velosDisponibles" style={{color : this.state.colorBikes}}>{this.props.availableBikes}</span>
                    </p>
                    <button className="btn" onClick={this.miniModal}>Adresse de la station</button>
                    <span className="address">{this.state.showComponent ? this.props.address : null }</span>
                </div>
                <Map/>
            </div>
            <div className="border"></div>
        </div>
    );
  }
}

export default Result;
