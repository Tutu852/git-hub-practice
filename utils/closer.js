(function name(){
    const myName = "rajesh";
    function inner(){
        console.log(myName);
    }
    return inner();
}
)();