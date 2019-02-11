import { combineReducers } from 'redux';
import promoCodeReducer from './promo_code_reducer'

const rootReducer = combineReducers({
    promoCode: promoCodeReducer
})

export default rootReducer;