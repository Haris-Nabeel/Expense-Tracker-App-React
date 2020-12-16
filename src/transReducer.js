const transactionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-TRANSACTION':
            return [action.payload, ...state]
        case 'DELETE-TRANSACTION':
            return [...state];
        default:
            return state;
    };
}
export default transactionReducer;