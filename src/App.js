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
    renderContent() {
        const {lat, errorMessage, message} = this.state;
        if(lat) return (<SeasonDisplay lat={lat} />);
        if(errorMessage) return (<div>Error: {errorMessage}</div>);
        return (<Spinner message={message} />)
    }

    render() {
        return (
            <div>
                <div className={`app-border`}>
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

export default App;

