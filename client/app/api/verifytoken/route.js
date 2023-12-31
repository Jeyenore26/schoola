const { prisma } = require("@/lib/prisma")
const jwt = require("jsonwebtoken")
import { validateToken } from '@/middleware/validations/token'
import { headers } from 'next/headers'

export async function GET() {
    const headersList = headers()

    const user = validateToken(headersList)


    return Response.json(user)
}