// fetch("http://localhost:3000/pin?address=Lucknow").then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data.message)
//             console.log(data.status)
//             console.log(data.locations)

//         }

//     })
// })

const pinform = document.querySelector("form")
const searchadd = document.querySelector("input")
const message1 = document.querySelector("#message-1")
const message2 = document.querySelector("#message-2")
const message3 = document.querySelector("#message-3")




pinform.addEventListener("submit",(e)=>{
    event.preventDefault()
    const location = searchadd.value
    console.log(location)
    message1.textContent="Loading...."
    message2.textContent= " " 
    message3.textContent=" "
    fetch("https://pinfind.herokuapp.com/pin?address="+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            // console.log(data.error)
            message1.textContent=data.error
        }
        else{
            message1.textContent=data.message
            message2.textContent=data.status
            const pindata = JSON.stringify(data.locations)
            message3.textContent=pindata


            // console.log(data.message)
            // console.log(data.status)
            // console.log(data.locations)

        }

    })
})
   
})