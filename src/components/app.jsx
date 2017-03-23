import React, { Component } from 'react';
import './app.less';

import Card from './card/card';
import Puke from './../utils/puke'


class App extends Component {
    constructor(props) {
        super(props);
        let pokerLists = Puke.deal();
        this.state = {
            card: pokerLists
        };
        // this.handelClick = this.handelClick.bind(this)
    }
    render() {
        let cards = this.state.card;
        return (
            <div className="app-container">
                {
                    cards.map((p, pi) => {
                        return (
                            <div className="card-container" key={pi}>
                                {
                                    p.map((c, ci) => {
                                        return <Card  key={ci} type={c.type} text={c.text}/>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


App.propTypes = {

};

export default App
