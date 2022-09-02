// let arrayOfObjects=[{name:'ekta', age:20},{name:'gayatri', age:19},{name:'aishwarya', age:11}];
// let filterdArrayOFObjects=arrayOfObjects.filter((a)=>{
//     return a.age>18  
// })
// console.log(filterdArrayOFObjects);

let array=[1,2,3,4,55,6];

let filteredArray=array.filter((a)=>{
    return a<6
})
console.log(filteredArray);

// /=>a=array[0]=1 return true=>[1]
// /=>a=array[1]=2 return true=>[1,2]
// /=>a=array[2]=3 return true=>[1,2,3]
// /=>a=array[3]=4 return true=>[1,2,3,4]
// /=>a=array[4]=55 return false=>[1,2,3,4]
// /=>a=array[5]=6 return true=>[1,2,3,4]