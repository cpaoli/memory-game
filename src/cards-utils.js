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

export function newGame() {
    const cardsShuffled = shuffleArray(this.state.cards);
    for (let i =0; i<cardsShuffled.length; i++){
        cardsShuffled[i].id= i;
        cardsShuffled[i].covered= true;
    }
    this.setState({firstCard: {}});
    this.setState({cards: cardsShuffled});
}

export function showCard(id) {
    if (this.state.animation){
        const cardsCopy = this.state.cards.slice(0);
        this.handleFirstCardAndCheck(cardsCopy[id]);
        cardsCopy[id].covered = false;
        this.setState({cards: cardsCopy});
    }
}

export function handleFirstCardAndCheck(card){
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

export function over(array){
    let i = array.length - 1;
    for (; i > 0; i--) {
        if(array[i].covered){
            return false
        }
    }
    return true;
}