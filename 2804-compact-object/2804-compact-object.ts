type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    if(typeof obj === "object"){
        if(Array.isArray(obj)){
            return obj.filter(x => Boolean(x))
                      .map(x => compactObject(x as Obj));
        }
        else{
            const resultObj = {};

            for(let ob in obj){
                if(Boolean(obj[ob])){
                    resultObj[ob] = compactObject(obj[ob] as Obj);
                }
            }

            return resultObj;
        }
    }

    return obj;
};