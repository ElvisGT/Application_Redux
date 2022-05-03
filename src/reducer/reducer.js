const reducer = (state,action) => {
    switch(action.type){
        case 'SHOW_MENU':
            return {
                ...state,
                show_menu:true
            }
        
        case 'HIDE_MENU':
            return {
                ...state,
                show_menu:false
            }
        
        case 'SEARCH_INPUT':  
            return {
                ...state,
                game:action.payload
                
            }
        
        
        
        default:
            return state;
    }
}


export {reducer};