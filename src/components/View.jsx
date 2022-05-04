import React from 'react';
import {connect} from 'react-redux';
import {MoreDetails,LessDetails} from '../actions/actions';

const View = (props) => {
    const {game,details} = props;

    const handleMore = card => {
        props.MoreDetails(card);
    }

    const handleLess = () => {
        props.LessDetails();
    }

    return (
        <div className="View">
                {game.length > 0 &&
                    game.map(item => (
                        <div className="View-card" key={item.name}>
                            <img className="View-card-img" src={item.background_image}/>
                                <div className="View-card-description">
                                    <p className="View-card-name">{item.name}</p>
                                    <p className="View-card-released">{item.released}</p>
                                    {details.length === 0 
                                        ?
                                            <img className="View-card-more" 
                                                src="https://i.ibb.co/Y8P59Ch/icons8-eliminar-32.png"
                                                onClick={() => handleMore(item)}     
                                            />
                                        :
                                            <img className="View-card-more" 
                                            src="https://i.ibb.co/Y8P59Ch/icons8-eliminar-32.png"
                                            onClick={() => handleLess(item)}     
                                    />
                                    }
                                </div>
                                {details.length > 0 &&
                                    details.map(detail => (
                                       item.released === detail.released &&
                                       <div key={item.name}>
                                           <h1>{detail.name}</h1>
                                       </div> 
                                ))}
                        </div>  
                    ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        game:state.game,
        details:state.details
    }
}

const mapDispatchToProps = {
    MoreDetails,
    LessDetails
}


export default connect(mapStateToProps,mapDispatchToProps)(View);