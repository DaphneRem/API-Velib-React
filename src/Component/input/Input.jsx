import React from 'react';
import axios from 'axios';
import Result from '../result/Result.jsx';
import './Input.css';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query : '', // on initialise query à rien, si rien n'est passé il nous affiche tout le data
            showList : false,
            data : []
    }
    this.handleChange = this.handleChange.bind(this); // On initie les this de chaques fonctions pour qu'il corresponde au this à l'intérieur de chaque fonction
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderResult = this.renderResult.bind(this);
}

    componentDidMount() {
      var url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=stations-velib-disponibilites-en-temps-reel&q=${this.state.query}&rows=1235&facet=banking&facet=bonus&facet=status&facet=contract_name`;
        axios.get(url).then((response) => {
            this.setState({data : response.data.records}); // this.setState : permet de return le resultat et de l'utiliser en global
        });
    }

    handleChange(event) { // quand input va changer : change la valeur de this.state.query
        this.setState({query : event.target.value});
    }
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.setState({
                showList : !this.state.showList
            });
        }
        console.log(this.state.showList);
    }
// sous certaine conditions je renvoie du html
    renderResult() {
        return this.state.data.map((e, i) => {
            if (e.fields.name.toLowerCase().includes(this.state.query.toLowerCase())) {
            return (<Result key={i} name={e.fields.name.substring(8, e.fields.name.length)} availableStands={e.fields.available_bike_stands} availableBikes={e.fields.available_bikes} />);
            }
        });
    }

    render() {

        let result = this.renderResult();

        return (
            <div>

                <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="saisissez un nom" onKeyPress={this.handleKeyPress} />
                {this.state.showList ? result : null}
            </div>

        );
    }
}
export default Input;
