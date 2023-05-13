require("dotenv").config();
export let config = {
    serviceName: process.env.SERVICE_NAME || "UI Service",
    mongodbURI: process.env.DATABASE_URI || "mongodb://localhost:27017/nova",
    port: process.env.PORT || 9400,
    kafkaHost: process.env.KAFKA_HOST || "kafka-service:9092",
    useDb: process.env.USE_DB == "true" ? true : false,
    useKafka: process.env.USE_KAFKA == "true" ? true : false,
    mapping: new Array(),
    dynamicModels: new Array(),
    permission: new Array(),
};

export function setOneConfig(name, value) {
    config[name] = value;
}
