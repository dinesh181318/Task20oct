const pick = (data,paths) => {
    const result={};
    for(let key in data2){
        if(key==paths[0]|| key==paths[1]){
           result[key]= data2[key];
        }
    }
    return result;
}
const data2 = {
   a : 1,
   b : 2,
   c : 3
}
const paths =  ['a', 'c']
console.log(pick(data2,paths)); 