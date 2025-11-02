import { Request, Response } from "express";
import pick from "../../helper/pick";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { doctorFilterableFields } from "./doctor.constant";
import { DoctorService } from "./doctor.service";

const getAllFromDB = catchAsync( async (req: Request, res: Response) => {

    const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder'])
    const filters = pick(req.query, doctorFilterableFields)

    
    const result = await DoctorService.getAllFromDB(filters, options)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User retrieved successfully!",
        meta: result.meta,
        data: result.data
    })
})

const updateDoctorProfile = catchAsync( async (req: Request, res: Response) => {

    const id = req.params.id

    const result = await DoctorService.updateDoctorProfile(id, req.body)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Doctor updated successfully!",
        data: result
    })
})

export const DoctorController = {
    getAllFromDB,
    updateDoctorProfile
}