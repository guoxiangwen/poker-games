import React, { Component, PropTypes } from 'react';
import './card.less';

class Card extends Component {
    render() {
        let type = "";
        switch (this.props.type) {
            case "diamonds":
                type = "suitdiamonds"
                break;
            case "hearts":
                type = "suithearts"
                break;
            case "clubs":
                type = "suitclubs"
                break;
            case "spades":
                type = "suitspades";
                break;
            default:
                type = "suitspades";
                break;
        }
        return (
            <div className="app-container">
                <div className={"card " + `${type}`}>
                    <p>{this.props.text}</p>
                </div>
            </div>

        );
    }
}

Card.propTypes = {
    text: PropTypes.string,//牌名
    type: PropTypes.string //花色
};

export default Card;