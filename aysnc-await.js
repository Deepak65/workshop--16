const calculate = (a, b, c)=> {
    return new Promise((resolved, reject)=> {
        setTimeout(() =>{
            if(a < 0 || b< 0 || c < 0)
               reject("no number can be negative")
            resolved(a+b+c);
        }, 1000);
    })
}

// calculate(1, 2, 3).then((addition) =>{
//     console.log(addition);
//     return calculate(addition, 4, 5)
// }).then((result) => {
// console.log(result)
// }).catch((e)=>{
//     console.log(e)
   
// })
const add = async() => {
  const sum1 = await calculate(1, 2, 3);
  const sum2 = await calculate(sum1, 4, 5);
  const sum3 = await calculate(sum2, 6, 7);
  const sum4 = await calculate(sum3, 8, 9);
  return sum4;
}
add().then((value)=> console.log(value)).catch((e) => console.log(e))