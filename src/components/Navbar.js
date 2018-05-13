import React from 'react';

const Navbar = ({newGame, over}) => {
    return(
        <div className="topnav">
                <h2><a className="active">Memory Game</a></h2>
                <a id="newGame" onClick={() => newGame()} >New Game </a>
            </div>
    )
}

export default Navbar;