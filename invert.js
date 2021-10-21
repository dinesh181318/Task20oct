const invert = (data) =>{
    const res = {};
    for (let key in data) {
      res[data[key]]=key;
            
        }
        return res;
    }
const data = {
    a : 1,
    b : 2,
    c : 3,
}
console.log(invert(data));

