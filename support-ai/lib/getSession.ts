import scalekit from "@scalekit-sdk/node"
import { cookies } from "next/headers"

export async function getSession(){
    const session = await cookies()
    const token = session.get("access_Token")?.value
    if(!token){
        return null
    }
    try{
         const result = await scalekit.validateToken(token!)
         const user = await scalekit.getUser(result.sub)
         return user
    }catch(error){
        console.log(error)
    }
    
    
}