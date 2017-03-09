import React, { Component } from 'react';
import './app.less';

import Card from './card/card'


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app-container">
                <Card text="A" type="hearts"/>
            </div>
        );
    }
}


App.propTypes = {

};

export default App
