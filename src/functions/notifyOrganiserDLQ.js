const AWSXray = require("aws-xray-sdk");
const AWS = AWSXray.captureAWS(require("aws-sdk"));
const Log = require('@dazn/lambda-powertools-logger');
const middy = require("middy");
const correlationIds = require('@dazn/lambda-powertools-middleware-correlation-ids');

const handler = (event) => {
    const orderPlaced = JSON.parse(event.Records[0].Sns.Message);

    Log.info("received message in the DLQ", { getTogetherId: orderPlaced.getTogetherId, orderId: orderPlaced.orderId, userEmail: orderPlaced.userEmail });

    return "all done";
};

module.exports.handler = middy(handler)
    .use(correlationIds({ sampleDebugLogRate: 0 }));
