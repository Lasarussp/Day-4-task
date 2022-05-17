var obj1 = { name: "Person 1", age:5 };

var obj2 = { age:5, name: "Person 1" };

if (obj1 == obj2) {
    console.log(true)
} else {
    console.log(false)
}

//another method;
var obj1 = { name: "Person 1", age:5 };

var obj2 = { age:5, name: "Person 1" };

var object=true;

if(Object.keys(obj1).length == Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            object=false;
            break;
        }
    }
}
else {
    object=false;
}
console.log(object);


