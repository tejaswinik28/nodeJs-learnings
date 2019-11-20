var Request = require("request");

Request.get("http://dummy.restapiexample.com/api/v1/employees", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});


