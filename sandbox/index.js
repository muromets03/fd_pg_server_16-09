const fs =require("fs")
const path =require("path")
const currentFilename = path.basename(__filename)

fs.readdirSync(__dirname)
.filter((fileName)=>(/.+\.js$/.test(fileName)) && fileName !== currentFilename)
.forEach((fileName)=>{
const absPath = path.resolve(__dirname, fileName)
require(absPath)
})