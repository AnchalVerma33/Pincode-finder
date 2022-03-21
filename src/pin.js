const pincode= require("./utility.js")
const express= require("express")
const hbs = require("hbs")
const path=require("path")

const app = express()

const Publicdirectory = path.join(__dirname,"../public")
const viewsdirectory = path.join(__dirname,"../views")

const PORT = process.env.PORT||3000
app.use(express.static(Publicdirectory))
app.set("view engine","hbs")
app.set("views",viewsdirectory)


app.get("",(req,res)=>{
    res.render("index",{
        title:"PinCode"
    })
})

app.get("/pin",(req,res)=>{
    if(!req.query.address){
        return res.send({error:"Please provide the address"})
    }
    else{
        pincode(req.query.address,(error,{message,status,locations}={})=>{
            if(error){
                return res.send(error)
            }
            else{
                res.send({address: req.query.address,
                    message,
                    status,
                    locations})
            }
        
        })        

    }

})



// address = process.argv[2]
// pincode(address,(error,data)=>{
//     if(error){
//         return console.log(error)
//     }
//     else{
//         console.log(data.message)
//         console.log(data.status)
//         console.log(data.locations)
//     }

// })

app.listen(PORT,()=>{
    console.log("server is starting")
})



