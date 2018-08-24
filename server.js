// List of dependencies
const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const cors = require("cors");

const app = express();

var port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

// api
app.get("/data", (req, res) => {
	// read json
	// parse it
	// send it back
	var content = require('./utilData_1.json');
  var UTIL_DATA = JSON.stringify(content);
	var utility = JSON.parse(UTIL_DATA);

	// sort the year and then the month of that year
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

	// utility bills with no saving - for bar grpah uses
	const no_solar = utility.map((u) =>{
		return u.bill + u.savings;
	});
	for(var i in utility){
		utility[i].other_utils = no_solar[i];
	}
	
	//console.log(utility);
	return res.json(utility);
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
