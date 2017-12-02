import constants from '../constants'

const initialState = {
	transparent: true,
	show: true
}
//true == transparent
//false == not transparent

export default (state = initialState, action) => {

	switch (action.type) {

		case constants.TRANSPARENT: 
			//console.log('works!! from navbarReducer')
			return {transparent: true, show: true}

		case constants.NOTTRANSPARENT:
			return {transparent: false, show: true}
		
		case constants.NONAVBAR:
			return { transparent: true, show: false }
			
		default:
			return initialState
	}
}