import React, { Component } from 'react';
import './Result.css';

class Result extends Component {



  render() {
    return (
      <div className="Result">
        {this.props.name} Place(s) disponible(s) {this.props.availableStands}, Vélo(s) disponible(s) {this.props.availableBikes}
      </div>
    );
  }
}

export default Result;
