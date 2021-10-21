const keys = (data)=> {
    const result = [];
    for (let key in data) { 
        result.push(key);     
          }
    return result
    }
const data = {
    a : 1,
    b : 2,
    c : 3
}
console.log(keys(data));