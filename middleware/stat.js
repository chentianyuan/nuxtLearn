export default function(context){
    return new Promise((reslove,reject)=>{
        context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
        reslove(context)
    })
}