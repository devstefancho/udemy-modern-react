import React from 'react';
import SearchBar from "./components/SearchBar";

class App extends React.Component {
    render() {
        return (
            <div className="ui container" style={{ marginTop: 20 }}>
                <SearchBar />
            </div>
        )
    }
}

export default App;

