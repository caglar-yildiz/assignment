import {StatusCodes} from "http-status-codes";
import {NextFunction, Request, Response} from "express";


export const errorHandler = (err : any, req :Request , res : Response, next : NextFunction) => {


    let customError :  {
        statusCode : number
        message : string
    } = {
        // Below is the default behaviour
        statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message : err.message || "Something went wrong, please try again later"
    }
    console.log(err)

    return res.status(customError.statusCode).json({success : false, message : customError.message, reason : err})
}