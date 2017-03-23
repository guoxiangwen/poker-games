import React, { Component, PropTypes } from 'react';
import './card.less';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: true //默认为反面
        };
        this.handelClick = this.handelClick.bind(this);
    }

    handelClick() {
        this.setState({
            back:!this.state.back
        })
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
            default:
                type = "suit_spades";
                break;
        }
        return (
            <div className={this.state.back ? "card suit_back" : "card " + `${type}`} onClick={this.handelClick}>
                <span>{this.state.back ?"":this.props.text}</span>
            </div>
        );
    }
}

Card.propTypes = {
    text: PropTypes.string,//牌名
    type: PropTypes.string //花色以及正反面
};

export default Card;