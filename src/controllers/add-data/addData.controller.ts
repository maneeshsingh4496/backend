import { NextFunction, Request, Response } from 'express';
import { ErrorCodes } from "../../models/errorCodes.model";
import * as DynamicModels from "../../models/dynamic.model";
export async function addDataHandler(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  try {

    let collectionName: any = req.params.collectionName;
    if (collectionName === undefined) {
      
      res.status(200).json({
        isSuccess: true,
        message: "API SEARCH SUCCESS",
        data: "Request Api is Not Valid",
      });
      next();
    }
    if (!req.params.collectionName) {
      
      res.status(ErrorCodes[1001]).json({
        isSuccess: false,
        error: ErrorCodes[1001],
        data: "Please enter collectionName.",
      });
      next();
      return;
    }
    let request: JSON = req.body;
    if (req.body) {
      let commanValue = await DynamicModels.findOneAwait(
        collectionName,
        { key: req.body.key },
        {},
        {}
      );
      if(commanValue && commanValue.key === req.body.key){
        res.status(200).json({
          isSuccess:false,
          error: ErrorCodes[1012],
          data: ErrorCodes["message"],
        });
        return
      }
      DynamicModels.addData(
        request,
        collectionName,
        (err: any, result: any, responseTime: any) => { }
      );
      res.status(200).json({
        status: 'success',
        data: "DATA ADDED SUCCESSFULLY.",
      });
    }
   
  } catch (err: any) {
    next(err);
  }
}