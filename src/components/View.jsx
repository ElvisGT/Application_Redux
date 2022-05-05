import React from 'react';
import {connect} from 'react-redux';
import {MoreDetails,LessDetails} from '../actions/actions';

const View = (props) => {
    const {game,details} = props;

    const handleMore = card => {
        props.MoreDetails(card);
    };

    const handleLess = () => {
        props.LessDetails();
    };

    return (
        <div className="View">
        {game.length > 0 &&
            game.map(item => (
                <div className="View-card" key={item.name} id="card">
                    <img className="View-card-img" src={item.background_image}/>
                        <div className="View-card-description">
                            <p className="View-card-name">{item.name}</p>
                            <p className="View-card-released">{item.released}</p>
                                
                            <img className="View-card-more-img" 
                                    src="https://i.ibb.co/mzLTDGz/icons8-m-s-30.png"
                                    onClick={() => handleMore(item)}     
                            /> 
                            
                        </div>
                        {details.length > 0 &&
                            details.map(detail => (
                                item.released === detail.released &&
                                <div className="View-card-details" key={detail.name}>
                                        <div className="View-card-less-container">
                                            <img className="View-card-less-img" 
                                            src="https://i.ibb.co/6YpJyn9/icons8-menos-30.png"
                                            onClick={() => handleLess()}     
                                            />
                                        </div>
                                    <div className="View-more-details">
                                        <h2 className="View-more-details-metacritic-title">
                                            Metacritic: 
                                        </h2>
                                        <p className="View-more-details-metacritic-p">
                                            {item.metacritic}
                                        </p>
                                        <h2 className="View-more-details-platform-title">
                                            Plataformas:
                                        </h2>
                                        <div className="View-more-details-platform">
                                        {item.platforms.map(platform => (
                                                <p className="View-more-details-platform-p" 
                                                    key={platform.platform.id}>
                                                    
                                                    {platform.platform.name}
                                                
                                                </p>
                                            
                                            ))}
                                        </div>
                                        <h2 className="View-more-details-screenshots-title">Screenshots:</h2>
                                        <div className="View-more-details-screenshots-container">
                                            {item.short_screenshots.map(screenshot => (
                                                <img src={screenshot.image}
                                                        key={screenshot.id}
                                                        className="View-more-details-screenShots-img"
                                                />
                                                ))}
                                        </div>
                    
                                    </div>
                                </div> 
                        ))}
                </div>  
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        game:state.game,
        details:state.details
    }
};

const mapDispatchToProps = {
    MoreDetails,
    LessDetails
};


export default connect(mapStateToProps,mapDispatchToProps)(View);