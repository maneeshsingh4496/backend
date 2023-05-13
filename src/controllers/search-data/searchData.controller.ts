import { NextFunction, Request, Response } from 'express';
import { ErrorCodes } from "../../models/errorCodes.model";
import * as DynamicModels from "../../models/dynamic.model";
import {
    getDocumentCount,
  } from "../../models/dynamic.model";

export async function searchDataHandler(
    req: Request | any,
    res: Response,
    next: NextFunction
) {
    console.log(req,"conditionArray")
    var request: JSON = req.body;
    let page: any = req.query.page ? req.query.page : "0";
    let limit: any = req.query.limit ? req.query.limit : false;
    let isPagination: any = false;
    var errors: any = req.error;
    if (errors) {
        req.status = {
            isSuccess: false,
            error: ErrorCodes[1001],
            data: errors,
        };
        next();
        return;
    }
    // let conditionArray: JSON[] = request["conditions"];
   
    // if (!conditionArray) {
    //     req.status = {
    //         isSuccess: false,
    //         error: ErrorCodes[1001],
    //         data: "Insert condition objects.",
    //     };
    //     next();
    //     return;
    // }
    
  if (!req.params.collectionName) {
    req.status = {
      isSuccess: false,
      error: ErrorCodes[1001],
      data: "Please enter collectionName.",
    };
    next();
    return;
  }

  let collectionName: any = req.params.collectionName;
  let count: number = await getDocumentCount(collectionName, {});
  console.log(count,"count")
}