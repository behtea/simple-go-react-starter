import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
