const randomQuote = require('random-quote');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    randomQuote()
    .then(quote => {
		context.res = {
			body: "hello " + quote		
		};
		
		context.done();
	})
    .catch(err => console.error(err));

/*
    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }	
    context.done();
   */
};
