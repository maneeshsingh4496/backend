
import mongoose = require("mongoose");

export var insert = async function (collectionName: any , Data: any) {
    return mongoose.connection.db.collection(collectionName).insertMany([Data]);
  }