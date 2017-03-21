import React, { Component, PropTypes } from 'react';
import './card.less';

class Card extends Component {
    constructor(props) {
        super(props);
        // this.handelClick = this.handelClick.bind(this);
    }
    render() {
        let type = "";
        //正面花色
        switch (this.props.type) {
            case "diamonds":
                type = "suit_diamonds"
                break;
            case "hearts":
                type = "suit_hearts"
                break;
            case "clubs":
                type = "suit_clubs"
                break;
            case "spades":
                type = "suit_spades";
                break;
                //反面
            case "back":
                type = "suit_back";
                break;
            default:
                type = "suit_spades";
                break;
        }
        return (
            <div className={"card " + `${type}`} onClick={this.props.handelClick}>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

Card.propTypes = {
    text: PropTypes.string,//牌名
    type: PropTypes.string //花色以及正反面
};

export default Card;