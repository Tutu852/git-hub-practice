const a  = 25;
const name1 = "Rajesh kumar"
const dob ="15/04/1998"

function sayName(){
    console.log(`My Name is  ${name1}`);
}

function isAbove18(){
    return age >= 19;
}

 
function newFeaturreAdded(){
    const name = "rajesh";
    function inner(){
        console.log(name);
    }
    return inner();
}
newFeaturreAdded();