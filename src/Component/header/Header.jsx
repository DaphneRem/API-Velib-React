import React from 'react';
import './Header.css';
import bike from '../images/bike.png';

class Header extends React.Component {

    render() {


        return (
            <div className="header">
                <img className="bike" src={bike}/>
                <div><h1 className="velib"> My Velib'</h1></div>
            </div>

        );
    }
}
export default Header;
