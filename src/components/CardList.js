import React, {Component} from 'react';
import Card from './Card';

export default class CardsList extends Component {
    render() {
        const {showCard} = this.props;
        const cards = this.props.cards.map((card, index) => (           
            <Card key={index} {...card} showCard={showCard}/>
        ));
        return (
            <div id = "content">{cards}</div>
        )
    }
}