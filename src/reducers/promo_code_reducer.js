import { PROMO_CODE } from '../actions/promo_code_actions';

const initial_state = {
    show: false,
    value: ''
}


const promoCodeReducer = (state = initial_state , action) => {
    Object.freeze(state);

    switch(action.type) {
        case PROMO_CODE:
            return {...state, value: action.payload}
        default: 
            return state;
    }
}

export default promoCodeReducer;