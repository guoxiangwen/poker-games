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
        this.handelClick = this.handelClick.bind(this)
    }
    handelClick(e) {
        console.log(e.target)
        // console.log(Puke.deal())
        // this.setState({
        //     card: { type: "clubs", text: "K" }
        // })
    }
    render() {
        // let people = this.state.card.length;
        let cards = this.state.card;
        return (
            <div className="app-container">
                {
                    cards.map((p, pi) => {
                        return (
                            <div className="card-container" key={pi}>
                                {
                                    p.map((c, ci) => {
                                        return <Card key={ci} type={c.type} text={c.text} handelClick={this.handelClick} />
                                    })
                                }
                            </div>
                        )
                    })
                }

                {/*<Card type="hearts" text="2" handelClick={this.handelClick} />*/}
                {/*<Card type={this.state.card.type} text={this.state.card.text} handelClick={this.handelClick} />*/}

            </div>
        );
    }
}


App.propTypes = {

};

export default App
