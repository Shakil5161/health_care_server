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

const getByIdFromDB  = catchAsync( async (req: Request, res: Response) => {
    const {id} = req.params
    const result = await DoctorService.getByIdFromDB(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Doctor retrieval successfully',
        data: result,
    });
})

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DoctorService.deleteFromDB(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Doctor deleted successfully',
        data: result,
    });
});


const softDelete = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DoctorService.softDelete(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Doctor soft deleted successfully',
        data: result,
    });
});

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

const getAISuggestions = catchAsync( async (req: Request, res: Response) => {


    const result = await DoctorService.getAISuggestions( req.body)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Suggest Doctor Successfully!",
        data: result
    })
})


export const DoctorController = {
    getAllFromDB,
    getByIdFromDB,
    updateDoctorProfile,
    getAISuggestions,
    deleteFromDB,
    softDelete,
}