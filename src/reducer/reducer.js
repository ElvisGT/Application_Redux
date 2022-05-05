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
        
        case 'MORE_DETAILS':  
            return {
                ...state,
                details:[action.payload]
            
        }

        case 'LESS_DETAILS':
            return {
                ...state,
                details:[]
            }
        
        case 'SHOW_DESKTOP':
            return {
                ...state,
                show_desktop:true,
            }
        
        default:
            return state;
    }
}


export {reducer};