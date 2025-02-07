const fs = require('fs')

// const data =  fs.readFile("./data.txt","utf8",(err,data)=>{
//     if(err){
//         console.log("error",err)
//     }
//     console.log(data)
// })
 fs.readFile("./data.txt","utf8",(err,data)=>{
    if(err){
        console.log("error",err)
    }
    console.log(data)       
})

console.log("heoollkkoo")