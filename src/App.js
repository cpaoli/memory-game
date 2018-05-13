import React, {Component} from 'react';
import Navbar from './components/Navbar';
import CardsList from './components/CardList';
import {newGame, showCard, handleFirstCardAndCheck, over} from './cards-utils';

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
                {id: 15, color: "orange", covered: true},{id: 16, color: "aqua", covered: true}, {id: 17, color: "LimeGreen", covered: true},
                {id: 18, color: "Sienna", covered: true}, {id: 19, color: "DarkRed", covered: true}, {id: 20, color: "aqua", covered: true},
                {id: 21, color: "LimeGreen", covered: true}, {id: 22, color: "Sienna", covered: true}, {id: 23, color: "DarkRed", covered: true}],
            firstCard: {},
            animation: true
        };
        this.showCard = showCard.bind(this);
        this.newGame = newGame.bind(this);

        this.handleFirstCardAndCheck = handleFirstCardAndCheck.bind(this);
    }

    render() {
        return (
            <div > 
                <div style={{animation: (over(this.state.cards)) ? "testing 1.5s linear infinite" : null}}>          
                <Navbar newGame={this.newGame} />             
                </div> 
                {(over(this.state.cards)) ? 
                <div className="fade-in ">
                    <div className="message">                
                        <p className="cong">CONGRATS!</p>
                        <p className="play-again">To play again click to New Game</p>                
                    </div>
                </div>
                : null}
                <div id="instructions">Clicks on two tiles to find two matching colors</div>
                <div className = "content"><CardsList showCard={this.showCard} cards={this.state.cards}/></div>
            </div>
        )
    }
}

export default App;