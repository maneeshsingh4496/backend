import mongoose = require("mongoose");
import { getCollectionObject } from "../seed/getDataModals";

const Schema: any = mongoose.Schema;
export let schema: any = new Schema({}, { strict: false, versionKey: false });
schema.set("toObject", { virtuals: true });
schema.set("toJSON", { virtuals: true });

//add data
export var addData: any = (
  data: any,
  collectionName: string,
  callBack: Function
): any => {
  let startTime: any = new Date();
  getCollectionObject(collectionName, schema).insertMany(
    [data],
    function (err: any, data: any): any {
      let responseTime = new Date().getTime() - startTime.getTime();
      callBack(err, data, responseTime);
    }
  );
};

export var findOneAwait: any = async (
  collectionName: string,
  query: any,
  projection: any,
  options: any
) => {
  let data = await getCollectionObject(collectionName, schema).findOne(
    query,
    projection,
    options
  );
  return JSON.parse(JSON.stringify(data));
};

export var updateOne = (
  data: JSON,
  id: string,
  collectionName: string,
  callBack: Function
): any => {
  let startTime: any = new Date();
  // logger.debug(logger.DEFAULT_MODULE, "", "log =>" + id);
  getCollectionObject(collectionName, schema).updateOne(
    { _id: id },
    { $set: data },
    { upsert: false },
    function (err: any, data: any): any {
      let responseTime = new Date().getTime() - startTime.getTime();
      callBack(err, responseTime);
    }
  );
};

//gets an estimated count of all documents
export function getDocumentCount(collectionName: string, query: any) {
  return getCollectionObject(collectionName, schema).estimatedDocumentCount(
    query
  );
}