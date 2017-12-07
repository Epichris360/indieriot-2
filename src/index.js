import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import { SignIn, SignUp, RecoverAccount, SalesColumns, Nav, AboutPage, Checkout, ConcertTicketsBought,
	MyConcerts,
	UserAccountSettings, CreateNewConcert, Cart } from './components/containers'
import { Error404 } from './components/presentation'
import Home from './components/Home'
import { StripeProvider } from 'react-stripe-elements'
import { Switch, BrowserRouter as Router, Route  } from 'react-router-dom'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the entry point of the React app with Redux
	already implemented. The Intro component is the 
	visual content and most likely, you will want 
	to remove it and replace with your own visual content.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/


const app = (
	<Provider store={store.configure(null)}>
		<StripeProvider apiKey="pk_test_PpFaSthFY4skw82DvBsSEVAy" >
			<Router>
				<div>
					<Nav  />
					<Switch>
						<Route exact path="/" 		   			component={Home}   		   		 />
						<Route path="/signin" 		   			component={SignIn} 		   		 />
						<Route path="/signup" 		   			component={SignUp} 		   		 />
						<Route path="/recover-account" 			component={RecoverAccount} 		 />
						<Route path="/tickets"	       			component={SalesColumns}   		 />
						<Route path="/about-us" 				component={AboutPage} 	   		 />
						<Route path="/account-settings"			component={UserAccountSettings}  />
						<Route path="/create-concert"			component={CreateNewConcert} 	 />
						<Route path="/cart"						component={Cart} 				 />
						<Route path="/checkout"					component={Checkout} 			 />
						<Route path="/tickets-bought" 			component={ConcertTicketsBought} />
						<Route path="/my-concerts"				component={MyConcerts} 		     />
						<Route path="/email-confirmation/:code"   />
							{/* needs to be SSR'ed. Just use a regular mustache template */}
						<Route 									component={Error404} />
					</Switch>
				</div>
			</Router>
		</StripeProvider>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))