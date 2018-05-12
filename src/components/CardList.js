import React, {Component} from 'react';
import Card from './Card';

export default class CardsList extends Component {
    render() {
        const {showCard} = this.props;
        const cards = this.props.cards.map((c, index) => (
            <Card key={index} {...c} showCard={showCard}/>
        ));
        return (
            <div>{cards}</div>
        )
    }
}