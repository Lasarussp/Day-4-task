const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.onload = function (e) {
    var response = JSON.parse(request.responseText);
    response.forEach(element =>  {
        console.log(element.flag);
       
    })

}
request.send(null);