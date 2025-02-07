const fs = require('fs')

const data = "  i am in  appppendddd"

 fs.appendFile("./data.txt",data,(err)=>{
    if(err) throw err
    else{
        console.log("success")
    }      
})

console.log("heoollkkoo")