const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();
const app = express();
var port = process.env.PORT || 3000;  
var bodyParser = require('body-parser')
var fs = require('fs');
let cors = require("cors");
app.use(cors());

// mongoose.connect('mongodb://localhost:27017/utilData-dev', {
// 	useNewUrlParser: true
// });
// var Util = require('./app/models/UtilData');

//-------------------------------------
// reading a JSON file
var content = require('./utilData_1.json');
// convert the JSON file into JSON object and then convert the JSON-encoded object into object
var UTIL_DATA = JSON.stringify(content);
var utility = JSON.parse(UTIL_DATA);

utility.sort((a, b) => {
  if(a.year < b.year){
    return -1;
  }
  if(a.year > b.year){
    return 1;
  }
  if(a.year === b.year){
    if(a.month < b.month){
      return -1;
    }
    if(a.month > b.month){
      return 1;
    }
    return 0;
  }
});
//-------------------------------------

// router.use((req, res, next) => {
// 	console.log('something is happening');
// 	next();
// });
app.use(bodyParser.json());
// app.use(() => {
// 	console.log('here');
// })

app.get('/', (req, res) => {
	res.json({});
	// res.json(utility);
});

app.post("/sum", (req, res) => {
	console.log(req.body);
	let obj = req.body;
	let {num1, num2} = obj;
	let sum = parseInt(num1) + parseInt(num2);
	return res.json({result: sum});
})

app.get("/data", (req, res) => {
	// read json
	// parse it
	// send it back
	var contents = fs.readFileSync('utilData_1.json', 'utf8');
	let obj = JSON.parse(contents);
	// console.log(obj);
	return res.json(obj);

})

// app.use('/api', router);

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});


/*
router.route('/utils')
	.post((req, res) => {
		var util = new Util();
		util.year = req.body.year;
		util.month = req.body.month;
		util.kwh = req.body.kwh;
		util.bill = req.body.bill;
		util.savings = req.body.savings;

		util.save((err) => {
			if(err) res.send(err);
			res.json({ message: 'a util data is created!'} );
		});
	})
	.get((req, res) => {
		Util.find((err, utils) => {
			if(err) res.send(err);
			res.json(utils);
		});
	});
*/