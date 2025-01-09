setTimeout(()=>{
    console.log("function execute after 3 sec");

},3000);


let id=setInterval(()=>{
    console.log("function will execute after every 1 sec");
},1000);
console.log(id);


setTimeout(()=> {
   clearInterval(id); 
},10000);


setTimeout(()=>{
    console.log("1");
},3000);
console.log("one.one");


setTimeout(()=>{
    console.log("3");
},0);
console.log("two.two");


setTimeout(()=>{
    console.log("2");
},2000);