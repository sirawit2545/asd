const promise = new Promise ((resolve ,reject) => {
    const res = true;

if(res) {
    resolve("Rosolved!");
}else{
    reject(Error("Fatal Rrror"));
}
});
promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);