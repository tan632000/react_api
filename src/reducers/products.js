import * as type from './../constants/ActionTypes'
var initialState = [];

const products = (state = initialState, action) => {
    var {id, product} = action
    var index = -1;
    switch(action.type) {
        case type.FETCH_PRODUCT: 
            state = action.products
            return [...state]
        case type.DELETE_PRODUCT:
            index = findIndex(state, id)
            state.splice(index, 1)
            return [...state]
        case type.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case type.UPDATE_PRODUCT:
            index = findIndex(state, product)
            state[index] = product
            return [...state]
        default : return [...state]
    }
};

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    });
    return result
}
export default products