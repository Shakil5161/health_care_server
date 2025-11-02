import { UserStatus } from "@prisma/client"
import bcrypt from "bcryptjs"
import config from "../../../config"
import ApiError from "../../errors/ApiError"
import { jwtHelper } from "../../helper/jwtHelper"
import { prisma } from "../../shared/prisma"
const login = async (payload: {email: string, password: string}) => {
  
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
            status: UserStatus.ACTIVE
        }
    })

    const isCorrectPassword = await bcrypt.compare(payload.password, user.password)
    if(!isCorrectPassword){
        throw new ApiError(403,"Password is incorrect!")
    }
    
    const accessToken = jwtHelper.generateToken({email: user.email, role: user.role}, config.jwt_secret as string,"10h")

    const refreshToken = jwtHelper.generateToken({email: user.email, role: user.role}, config.jwt_secret as string, "30d")

    return {
        accessToken,
        refreshToken,
        needPasswordChange: user.needPasswordChange
    }

}

export const AuthService = {
    login
}