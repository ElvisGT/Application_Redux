export const ShowMenu = (payload) => ({
    type:'SHOW_MENU',
    payload
});

export const HideMenu = (payload) => ({
    type:'HIDE_MENU',
    payload
});

export const SearchInput = (payload) => ({
    type:'SEARCH_INPUT',
    payload
});

export const MoreDetails = (payload) => ({
    type:'MORE_DETAILS',
    payload
})

export const LessDetails = () => ({
    type:'LESS_DETAILS',
})
