function response(status,mensage,data =null)

{
    return{
        status,
        Message,
        data,
        timestamp: new Date().getTime()

    }
}

Module.exports ={
    response
}