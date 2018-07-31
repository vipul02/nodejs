var https = require('https');
var fs = require('fs');

var file = fs.createWriteStream("file.jpg");
var request = https.get("https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg", function (response) {
    response.pipe(file);
});