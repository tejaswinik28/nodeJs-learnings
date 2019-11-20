var Request = require("request");

function initialize(){
    var options = {
        url: 'https://api.github.com/users/tejaswinik28',
        headers: {
            'User-Agent': 'request'
        }
    };

    return new Promise(function(resolve,reject){
        Request.get(options, function(error,response,body){
            if(error){
                console.log("Ohhh there is and error");
                console.log(error);

            }
            else{
                resolve(JSON.parse(body));
            }
        });
    });
}

function main(){
    var promiseHandler = initialize();
    promiseHandler.then(function(result){
       console.log("Hey you are succesful" + " " +result.login);
       console.log(result);
    });
}
main();

