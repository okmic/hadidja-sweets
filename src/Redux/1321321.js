import { initialState } from "./DataHS";

const ADD = "ADD"

const hadidjaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            debugger
            return{
                ...state,
                cartItems: {id: action.id, title: action.title}
            }
        default:
            debugger
            return state;
    }
}

export const sendBasket = (id, title) => ({ type: ADD, id, title})
export const AddProductBasket = (id, title) => (dispatch) => {
    dispatch(sendBasket(id, title));
}


export default hadidjaReducer