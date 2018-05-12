import React from 'react';

const Card =({color, id, showCard, covered}) => {
    return(
        <div id="card" style={{backgroundColor: (covered) ? "grey" : color}} onClick={() => showCard(id)}></div>
    )
}
    
export default Card;