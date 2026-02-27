import { scalekit } from "@/lib/scalekit"
import { cookies } from "next/headers"

export async function getSession() {

  const session = await cookies()
  const token = session.get("access_Token")?.value

  if (!token) return null

  try {
    const result: any = await scalekit.validateToken(token)

    // token payload already contains user info
    return result

  } catch (error) {
    console.log("Session error:", error)
    return null
  }
}