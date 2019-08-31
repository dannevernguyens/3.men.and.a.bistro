// Coffee Order Prompt, should return number of coffees on web page

var howMany = function(){
    var count = prompt('How many coffees would you like to order?');
    while( isNaN(count) ){
        count = prompt('Please enter a number. How many coffees would you like to order?');
    }
    return Number(count); 
}

var showOrder = function(){
    var total = howMany();
    var result = '';
    // this tells other devs that the intention of this is to show a string
    for(var i = 0; i < total; i++){
       result += '<li> Coffee ' + i + '</li>'; // gives us the # of orders in <li> items
    }
    return result
}

