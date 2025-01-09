let arr1 = [1, 2, 3, true, "abc"]
console.log(typeof (arr1))
console.log(arr1)

arr1.push(false);
console.log(arr1)

arr1.unshift(10);
console.log(arr1)

arr1.pop();
console.log(arr1)

arr1.shift();
console.log(arr1)

console.table(arr1);
console.log(arr1.reverse())
//join convert array into string
let res = arr1.join(",");
console.log(res)
console.log(typeof (res))
//to convert string into arr
let ans = res.split(",")
console.log(ans)
console.log(typeof (ans))

let arr2 = [10, 20, 30, 40];
let data = arr1.concat(arr2)
console.log(data)
console.log(typeof (data))
let str="The sky is blue";
let abc =str.split(" ").reverse().join(" ");
console.log(abc);
