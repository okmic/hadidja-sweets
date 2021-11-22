import { initialState } from "./DataHS";

const SEND_BASKET = 'SEND_BASKET'
const ADD_BASKET = 'ADD_BASKET'
const REMOVE_BASKET = 'REMOVE_BASKET'
const DELETE_BASKET = 'DELETE_BASKET'

const canvasReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_BASKET: {
            return {
                ...state,
                products: [
                    ...state.products.map(p => p.id === action.id ? { ...p, amount: action.amount, buttonActive: !action.buttonActive } : p)
                ],
                cartItems: [
                    ...state.cartItems,
                    {
                            id: action.id,
                            image: action.image,
                            title: action.title,
                            price: action.price,
                            amount: action.amount
                        } 
                    ],
            }
        }
        case ADD_BASKET: {
            return{
                ...state,
                cartItems: [
                    ...state.cartItems.map(p => p.id === action.id ? { ...p, amount: p.amount + 1 } : p)
                ],
            }
        }
        case REMOVE_BASKET: {
            return{
                ...state,
                cartItems: [
                    ...state.cartItems.map(p => p.id === action.id ? { ...p, amount: p.amount - 1 } : p)
                ],
            }
        }
        case DELETE_BASKET: {
            return{
                ...state,
                products: [
                    ...state.products.map(p => p.id === action.id ? { ...p, buttonActive: false } : p)
                ],
                cartItems: state.cartItems.filter(o => o.id !== action.id),
            }
        }
        default:
            return state;
    }
}

export const sendBasket = (id, image, title, price, amount) => ({ type: SEND_BASKET, id, image, title, price, amount})
export const addBasket = (id) => ({type: ADD_BASKET, id})
export const removeBasket = (id) => ({type: REMOVE_BASKET, id})
export const deleteBasket = (id) => ({type: DELETE_BASKET, id})



export default canvasReduser