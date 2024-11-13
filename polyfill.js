// filter polyfill

Array.prototype.filter = null

if(!Array.prototype.filter){
    Array.prototype.filter = function(callback){

        if(typeof callback !== 'function'){
            throw new Error('callback is not a function')
        }

        let result = []

        for(let i = 0;i<this.length;i++){
              
            if(callback(this[i],i,this)){
                result.push(this[i])
            }
        }

        return result
    }
}

const res = [1,2,3,4,5].filter((ele,i)=>{
    return ele%2 ==0
})

console.log(res)



// reduce polyfill

Array.prototype.reduce = null

if(!Array.prototype.reduce){
    Array.prototype.reduce = function(callback,initval){

        if(typeof callback !== 'function'){
            throw new Error('callback is not a function')
        }

        let accumulator = initval
        let startindex = 0

        if(initval == undefined){
            
            if(this.length == 0){
                throw new Error('Array cannot be empty,require initial value')
            }

            accumulator = this[0]
            startindex = 1
        }

        for(let i= startindex;i<this.length;i++){
            accumulator = callback(accumulator,this[i],i,this)
        }

        return accumulator
        
    }
}


const res1 = [1,2,3].reduce((acc,cur)=>{
    return acc+cur

},0)

console.log(res1)