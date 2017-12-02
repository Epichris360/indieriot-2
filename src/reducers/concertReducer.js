import constants from '../constants'

const initialState = []

export default (state = initialState, action) => {
    let newState
	switch (action.type) {

        case constants.ALL_CONCERTS :
			return [...action.data]
 
        case constants.NEW_CONCERT: 

            return [...action.data, ...state]

		default:
			return state
	}
}