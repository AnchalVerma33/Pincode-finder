const request=require("request")


function pincode(address,callback){
    url = "https://api.postalpincode.in/postoffice/"+encodeURIComponent(address)
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback({error:"Pincode unavailable"},undefined)
        }
        else if(!response.body[0].PostOffice){
            callback({error:"Location not found.Try again"},undefined)
        }
        else{
            const smallpostoffice = []
            if(response.body[0].PostOffice){
            response.body[0].PostOffice.forEach((postoffice) => {
                let obj = {
                    Name : postoffice.Name,
                    Region:postoffice.Region,
                    Pincode:postoffice.Pincode
                }
                smallpostoffice.push(obj)   
            })
        }
            callback(undefined,{
                message: response.body[0].Message,
                status: response.body[0].Status,
                locations : smallpostoffice
            })
        }
    })}


    module.exports=pincode