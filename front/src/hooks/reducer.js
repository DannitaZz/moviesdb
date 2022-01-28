export const initialState = {
    data: [],
    initialData: [],
    details: {}
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'getMovies':
            return {...state}
        case 'getDetails':
            return {...state}
        default:
            return {...state}
    }
}