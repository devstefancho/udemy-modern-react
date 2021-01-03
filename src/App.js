import React from 'react';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: '',
            message: 'Please accept location request',
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
                {!this.state.lat && !this.state.errorMessage && <Spinner message={this.state.message}/>}
            </div>
        )
    }
}

export default App;

