import React from 'react';
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: '',
        }
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        )
    }

    render() {
        return (
            <div>
                {this.state.lat && <SeasonDisplay lat={this.state.lat} />}
                {this.state.errorMessage && <div>Error: {this.state.errorMessage}</div>}
                {!this.state.lat && !this.state.errorMessage && <div>Loading!</div>}
            </div>
        )
    }
}

export default App;

