import React, {Component} from 'react';
import Navbar from './components/Navbar';
import CardsList from './components/CardList';
import {newGame, showCard, handleFirstCardAndCheck} from './cards-utils';

class App extends Component {

    componentDidMount() {
        newGame.call(this);
    }

    constructor(props) {
        super(props);
        this.state = {
            cards: [{id: 0, color: "blue", covered: true}, {id: 1, color: "red", covered: true}, {id: 2, color: "yellow", covered: true},
                {id: 3, color: "pink", covered: true}, {id: 4, color: "blue", covered: true}, {id: 5, color: "red", covered: true},
                {id: 6, color: "yellow", covered: true}, {id: 7, color: "pink", covered: true}, {id: 8, color: "purple", covered: true},
                {id: 9, color: "black", covered: true}, {id: 10, color: "white", covered: true}, {id: 11, color: "orange", covered: true},
                {id: 12, color: "purple", covered: true}, {id: 13, color: "black", covered: true}, {id: 14, color: "white", covered: true},
                {id: 15, color: "orange", covered: true}],
            firstCard: {},
            animation: true
        };
        this.showCard = showCard.bind(this);
        this.newGame = newGame.bind(this);
        this.handleFirstCardAndCheck = handleFirstCardAndCheck.bind(this);
    }

    render() {
        return (
            <div>
                <Navbar newGame={this.newGame}/>
                < div className = "content"><CardsList showCard={this.showCard} cards={this.state.cards}/></div>
            </div>
        )
    }
}

export default App;