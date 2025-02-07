const fs = require('fs')

const data = "i am in async"

 fs.writeFile("./data.txt",data,(err)=>{
    if(err){
        console.error("error",err)
    }
    else{
        console.log("success")
    }      
})

console.log("heoollkkoo")