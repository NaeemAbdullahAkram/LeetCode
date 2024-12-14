/**
 * @param {Function} fn
 * @return {Object}
 */

Array.prototype.groupBy = function(fn) {
    let obj = {};

    this.forEach((el)=>{
        let key = fn(el);
        if (obj[key]){
            obj[key].push(el);
        } else {
            obj[key] = [el];
        }
        });

        return obj;
};
/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */