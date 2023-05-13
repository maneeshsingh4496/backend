import mongoose from 'mongoose';
import  {config}  from "../../config/config";
// import * as logger from "../models/logs";

export function getCollectionObject(collectionName: string, schema: any):any {
  let collectionExists: boolean = false;
  let collection: any = {};

  try {
    for (var i = 0; i < config.dynamicModels.length; i++) {
      if (config.dynamicModels[i]["name"] === collectionName) {
        collection = config.dynamicModels[i];
        collectionExists = true;
        break;
      }
    }

    if (!collectionExists) {
      collection["name"] = collectionName;
      collection["model"] = mongoose.model(collectionName, schema, collectionName);
      config.dynamicModels.push(collection);
    }
  } catch (err) {
    // logger.error(logger.DEFAULT_MODULE, '', "dynamic models error : " + err);
    console.log("error = "+err);
  }

  return collection["model"];
}