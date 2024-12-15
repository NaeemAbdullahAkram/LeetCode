/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
//Creating heap class in javascript
    class Heap{
        constructor(type){
            this.type = type;
            this.data = [];
            this.data[0] = undefined;
        }
        print(){
            for(let i=1;i<this.data.length;i++){
                console.log(this.data[i])
            }
        }
        getSize(){
            return this.data.length-1;
        }
        insert(value){
            this.data.push(value);
            if(this.data.length==2){
                return ;
            }
            let lastIndex = this.data.length-1;
            while(this.data[Math.floor(lastIndex/2)]!==undefined && this.compare(this.data[lastIndex],this.data[Math.floor(lastIndex/2)])>0){
                let temp = this.data[Math.floor(lastIndex/2)];
                this.data[Math.floor(lastIndex/2)] = this.data[lastIndex];
                this.data[lastIndex] = temp;
                lastIndex = Math.floor(lastIndex/2);
            }
        }
        //This returns a positive number if a is greater than b. Here meaing of being greater depends on the type of heap. For max heap it will return positive number if a>b and for min heap it will return positive number if a<b . 
        compare(a,b){
            let aDiff,bDiff;
            aDiff = ((a[0]+1)/(a[1]+1))-(a[0]/a[1]);
            bDiff = ((b[0]+1)/(b[1]+1))-(b[0]/b[1]);
            if(this.type==="min"){
                return bDiff-aDiff;
            }else{
                return aDiff -bDiff;
            }
        }
        removeTop(){
            let max = this.data[1];
            if(this.getSize()>1){
                this.data[1] = this.data.pop();
                this.heapify(1);
            }else{//If the size is 0 then just remove the element, no shifting and hipify will be applicable
                this.data.pop();
            }
            return max;
        }
        getTop(){
            let max = null;
            if(this.getSize()>=1){
                max = this.data[1];
            }
            return max;
        }
        heapify(pos){
            if(pos*2>this.data.length-1){
                //That means element at index 'pos' is not having any child
                return;
            }
            if(
                (this.data[pos*2]!==undefined && this.compare(this.data[pos*2],this.data[pos])>0)
              || (this.data[pos*2+1]!==undefined && this.compare(this.data[pos*2+1],this.data[pos])>0)
              ){
                if(this.data[pos*2+1]===undefined || this.compare(this.data[pos*2+1],this.data[pos*2])<=0){
                    let temp = this.data[pos*2];
                    this.data[pos*2] = this.data[pos];
                    this.data[pos] = temp;
                    this.heapify(pos*2);
                }else{
                    let temp = this.data[pos*2+1];
                    this.data[pos*2+1] = this.data[pos];
                    this.data[pos] = temp;
                    this.heapify(pos*2+1);
                }
            }
        }
    }
    let ratioSum=0,minHeap=new Heap('max');
    for(let i=0;i<classes.length;i++){
        ratioSum += classes[i][0]/classes[i][1];
        minHeap.insert(classes[i]);
    }
    while(extraStudents>0){
        let min =   minHeap.removeTop();
        ratioSum -= min[0]/min[1];
        min[0]++;
        min[1]++;
        ratioSum += min[0]/min[1];
        minHeap.insert(min);
        extraStudents--;
    }
    return ratioSum/classes.length;
};