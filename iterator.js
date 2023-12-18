let str = "Hello";

let itertor =str[Symbol.iterator]();

while(true){
    let result = itertor.next();
    if(result.done) break;
    console.log(result.Value);
}