import constants from '../constants'

const initialState = {
    user_id:'',
    concerts:[],
    total:0
}

export default (state = initialState, action) => {

	switch (action.type) {

        case constants.POST_CART:
            return action.data[0]

        case constants.GET_CART:
			return action.data[0]

        case constants.UPDATE_CART:
            return action.data

        /*case constants.BUY_FROM_CART: 
            return initialState*/

        case constants.NEW_CART_AFTER_PURCHASED:
            return initialState
 
		default:
			return state
	}
}