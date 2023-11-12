const { prisma } = require("@/lib/prisma")
const jwt = require("jsonwebtoken")

export function validateToken(headersList) {

    console.log(headersList)

    const auth = headersList.get('authorization')

    console.log(auth)

    const user = jwt.verify(auth, process.env.SECRET_TOKEN)

    return user
}