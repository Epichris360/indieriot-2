import constants from '../constants'
import { TurboClient } from '../utils'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

export default {

	fetchUsers: (params) => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
		}
	},

	addUser: (params) => {
		return dispatch => {
			return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
		}
	},

	// Unlike addUser, register() also maintains a session for login state. After calling 
	// TurboClient.createUser(), the new user is logged in as well:
	register: (params) => {
		return dispatch => {
			return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
		}
	},

	loginUser: (credentials) => {
		return dispatch => {
			return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
		}
	},

	currentUser: () => {
		return dispatch => {
			return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
		}
	},
 
	logout: () => {
		return dispatch => {
			return dispatch( TurboClient.logout( constants.USER_LOGOUT ) )
		}
	},

	navBarTransparent: () => { 
		return dispatch => {
			return dispatch({ type: constants.TRANSPARENT, data: null })
		}
	},

	navBarNotTransparent: () =>  {
		return dispatch => {
			return dispatch({ type: constants.NOTTRANSPARENT, data: null })
		}
	},

	noNavBar: () => {
		return dispatch => {
			return dispatch( { type: constants.NONAVBAR, data: null } )
		}
	},

	updateUser: (orig, params) => {
		return dispatch => {
			return dispatch( TurboClient.putRequest('user', orig, params, constants.UPDATE_USER ) )
		}
	},

	createConcert: (params) => {
		return dispatch => {
			return dispatch( TurboClient.postRequest('concerts', params, constants.NEW_CONCERT) )
		}
	},

	getAllConcertsActive: (params) => {
		return dispatch => {
			return dispatch( TurboClient.getRequest('concerts', null , constants.ALL_CONCERTS) )
		}
	},

	createCart: params => {
		return dispatch => {
			return dispatch( TurboClient.postRequest('carts', params, constants.POST_CART) )
		}
	},

	getCart: params => {
		return dispatch => {
			return dispatch( TurboClient.getRequest('carts', params, constants.GET_CART ) )
		}
	},

	updateCart: (id, params) => {
		return dispatch => {
			return dispatch( TurboClient.putWithIdRequest( 'carts', id, params, constants.UPDATE_CART ) )
		}
	},

	newCartAfterPurchased: () => {
		return dispatch => {
			return dispatch( { type: constants.NEW_CART_AFTER_PURCHASED , data: null } )
		}
	},

	getMyPurchasedCarts: params => {
		return dispatch => {
			return dispatch( TurboClient.getRequest( 'purchased_carts',params, null ))
		}
	},

	getMyConcerts: params => {
		return dispatch => {
			return dispatch( TurboClient.getRequest( 'concerts', params, null ) )
		}
	},

	updateMyConcert: (id, params) => {
		return dispatch => {
			return dispatch( TurboClient.putWithIdRequest( 'concerts', id, params, null ) )
		}
	}
	
} 