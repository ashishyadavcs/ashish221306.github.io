if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registeration=>{
        console.log("sw Registered")
    }).catch(error=>{
        console.log("sw registration failed");
        console.log(error)
    })
}