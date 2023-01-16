const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CollageWebSiteDB")
.then((result) => {
    console.log("Connection Successfully");
}).catch((err) => {
    console.log("Error in Connection DB:",err)
});