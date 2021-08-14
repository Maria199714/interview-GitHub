

let arr=[1,2,3,4,5,6];
arr.sort(function () {
    return Math.random()-0.5;
});
console.log(arr);