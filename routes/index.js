const turbo  = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
var   stripe = require("stripe")("sk_test_PriIYXaLvWm5L0uTm8fEIr4i")

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', function(req, res){
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

/*  This route render json data */
router.get('/json', function(req, res){
	res.json({
		confirmation: 'success',
		app: process.env.TURBO_APP_ID,
		data: 'this is a sample json route.'
	})
})

/*  This route sends text back as plain text. */
router.get('/send', function(req, res){
	res.send('This is the Send Route')
})

/*  This route redirects requests to Turbo360. */
router.get('/redirect', function(req, res){
	res.redirect('https://www.turbo360.co/landing')
})

router.post("/charge-card", function(req, res){
	const charge = req.body.params.charge
	const token  = req.body.params.token

	stripe.charges.create({
	  amount: (charge * 100),
	  currency: "usd",
	  description: "Band Tickets and Stuff",
	  source: token.id,
	}, function(err, charge) {
	  // asynchronously called
	  if(err){
		  res.status(500).json({msg: "nope"})
	  }
	  
	  //turbo.create('myConcerts',{  })
	  //create myConcerts to have peoples old carts
	  //then updated the cart of the user to be empty
	  //then send the 200 status
	  //have a paying status bar in checkout
	  res.status(200).json({
		  status: 200,
		  message:"transaction completed",
		  charge: charge
	  })

	})
})

router.get('*', function(req, res){
	res.redirect("/")
})


module.exports = router
