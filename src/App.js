import React, {Component} from 'react';
import Navbar from './components/Navbar';
import CardsList from './components/CardList';

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

class App extends Component {
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
        this.showCard = this.showCard.bind(this);
        this.newGame = this.newGame.bind(this);
        this.handleFirstCardAndCheck = this.handleFirstCardAndCheck.bind(this);
    }

    showCard(id) {
        if (this.state.animation){
            const cardsCopy = this.state.cards.slice(0);
            this.handleFirstCardAndCheck(cardsCopy[id]);
            cardsCopy[id].covered = false;
            this.setState({cards: cardsCopy});
        }
    }

    handleFirstCardAndCheck(card){
        if (card.covered === true){
            if (this.state.firstCard.color === undefined) {
                this.setState({firstCard: card});

            } else {
                setTimeout(function () {
                    if (this.state.firstCard.color !== card.color) {
                        card.covered = true;
                        let firstClickedCard = this.state.firstCard;
                        firstClickedCard.covered = true;
                        const cards2 = this.state.cards.map((c, i) =>
                            i === firstClickedCard.id ? firstClickedCard : c
                        );
                        this.setState({cards: cards2});
                    }
                    this.setState({animation: true});
                    this.setState({firstCard: {}});
                }.bind(this), 800);
                this.setState({animation: false});
            }
        }
    }
    newGame() {
        const cardsShuffled = shuffleArray(this.state.cards);
        for (let i =0; i<cardsShuffled.length; i++){
            cardsShuffled[i].id= i;
            cardsShuffled[i].covered= true;
        }
        this.setState({firstCard: {}});
        this.setState({cards: cardsShuffled});
    }

    componentDidMount() {
        this.newGame();
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
