import { Request, Response } from "express";

import pick from "../../helper/pick";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { IJWTPayload } from "../../type/common";
import { ScheduleService } from "./schedule.service";




const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await ScheduleService.insertIntoDB(req.body)

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Schedule created successfully",
        data: result
    })
})

const schedulesForDoctor = catchAsync( async (req: Request &{user?: IJWTPayload}, res: Response) => {

    const user = req.user
    const  options = pick(req.query, ["status", "role", "email", "searchTerm"])
    const  filters = pick(req.query, ['startDateTime', 'endDateTime'])

    
    const result = await ScheduleService.schedulesForDoctor(user as IJWTPayload, filters, options)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Schedule fetched successfully!",
        meta: result.meta,
        data: result.data
    })
})

    
const deleteScheduleFromDB = catchAsync( async (req: Request, res: Response) => {
    
    const result = await ScheduleService.deleteScheduleFromDB(req.params.id)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Schedule Deleted Successfully!",
        data: result
    })
})

export const ScheduleController = {
    insertIntoDB,
    schedulesForDoctor,
    deleteScheduleFromDB
}