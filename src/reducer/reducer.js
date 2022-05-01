const reducer = (state,action) => {
    switch(action.type){
        case 'SHOW_MENU':
            return {
                ...state,
                show_menu:!state.show_menu
            }
        
        default:
            return state;
    }
}


export {reducer};