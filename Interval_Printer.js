
function printer(){
    let count =1
    let intervalid = setInterval(()=>{
       console.log(count)
       count++
       if(count >10){
        clearInterval(intervalid)
       }
    },1000)
}

printer()