import React from 'react';
import {connect} from 'react-redux';

const View = ({game}) => {
    return (
        <div className="View">
        {game.length > 0 &&
            game.map(item => (
            <p key={item.name}>{item.name}</p>
            
            ))}
            
        
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        game:state.game
    }
}


export default connect(mapStateToProps,null)(View);