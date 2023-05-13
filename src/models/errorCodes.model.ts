// error codes object
export const ErrorCodes: any = {
    // 10XX - Common errors
    1001: {
      message: "Missing mandatory input params",
      errorCode: 1001,
      statusCode: 400
    },
    1002: {
      message: "Failed to Find Data",
      errorCode: 1002,
      statusCode: 400
    },
    1003: {
      message: "Failed to Update Data",
      errorCode: 1003,
      statusCode: 400
    },
    1004: {
      message: "Failed to Delete Data",
      errorCode: 1004,
      statusCode: 400
    },
    1005: {
      message: "Failed to Add Data",
      errorCode: 1005,
      statusCode: 400
    },
    1007: {
      message: "Failed to update entry in DB",
      errorCode: 1007,
      statusCode: 500
    },
    1008: {
      message: "Unknown exception occured",
      errorCode: 1008,
      statusCode: 500
    },
    1009: {
      message: "Data too large",
      errorCode: 1009,
      statusCode: 400
    },
    1010: {
      message: "Please Buy The Licence",
      errorCode: 1010,
      statusCode: 400
    },
    1011: {
      message: "Licence has been edited",
      errorCode: 1011,
      statusCode: 400
    },
    1012: {
      message: "Data Already Exit",
      errorCode: 1012,
      statusCode: 400
    },
  };
  
  //status codes object
  export const StatusCodes: any = {
    // Bobcat Server Response Codes
    0: {
      message: "SFC_OK",
      statusCode: 0
    },
    1: {
      message: "SFC_ERROR",
      statusCode: 1
    },
    2: {
      message: "SFC_FATAL_ERROR",
      statusCode: 2
    },
    3: {
      message: "SFC_DATA_FORMAT_ERROR",
      statusCode: 3
    },
    4: {
      message: "SFC_INVALID_COMMAND_ERROR",
      statusCode: 4
    }
  };
  
  //response object configuration
  export class ResponseObj {
    public status: number;
    public message: string;
    public data: any;
    public responseTime: any;
    public timestamp: any;
  
    constructor(status: number, message: string, data: any,responseTime: any,timestamp: any) {
      this.status = status;
      this.message = message;
      this.data = data;
      this.responseTime = responseTime;
      this.timestamp = timestamp;
    }
  
    public toJson(): any {
      return { status: this.status, message: this.message, data: this.data, 
        responseTime: this.responseTime, timestamp: this.timestamp};
    }
  
    public toPlain(): any {
      return `${this.status} ${this.message}`;
    }
  
    public toJsonString(): any {
      return JSON.stringify({
        status: this.status,
        message: this.message,
        data: this.data,
        responseTime: this.responseTime,
        timestamp: this.timestamp,
      });
    }
  }
  