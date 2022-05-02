import React from 'react';
import {connect} from 'react-redux';

const View = ({game}) => {
    return (
        <React.Fragment>
        {game.length > 0 &&
            game.map(item => (
            <p key={item.name}>{item.name}</p>
            
            ))}
            
        
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        game:state.game
    }
}


export default connect(mapStateToProps,null)(View);