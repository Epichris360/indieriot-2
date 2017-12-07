import constants from '../constants'

const initialState = {
	role:'normal',
	id:'',
	category:''
}
export default (state = initialState, action) => {
	switch (action.type) {
		case constants.CURRENT_USER_RECEIVED:
			return action.data

		case constants.USER_CREATED:
			return action.data
			
		case constants.USER_LOGOUT:
			return initialState

		case constants.UPDATE_USER:
			return action.data

		default:
			return state
	}
}