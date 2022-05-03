import React from 'react';
import {connect} from 'react-redux';

const View = ({game}) => {
    return (
        <div className="View">
                {game.length > 0 &&
                    game.map(item => (
                        <div className="View-card" key={item.name}>
                            <img className="View-card-img" src={item.background_image}/>
                                <div className="View-card-description">
                                    <p className="View-card-name">{item.name}</p>
                                    <p className="View-card-released">{item.released}</p>
                                </div>
                        </div>
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