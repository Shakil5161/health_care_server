import { prisma } from "../../shared/prisma"
import { IJWTPayload } from "../../type/common"


const createDoctorSchedule = async (user: IJWTPayload, payload: {
    scheduleIds: string[]
}) => {
    
    const doctorData = await prisma.doctor.findUniqueOrThrow({
        where: {
            email: user.email
        }
    })

    const doctorScheduleDate = payload.scheduleIds.map(scheduleId => ({
        doctorId: doctorData.id,
        scheduleId
    }))

    return await prisma.doctorSchedule.createMany({
        data: doctorScheduleDate
    })

}



export const DoctorScheduleService = {
    createDoctorSchedule
}