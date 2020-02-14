module.exports.handler = (event) => {
    const joinedGetTogether  = JSON.parse(event.Records[0].Sns.Message);
    console.log(`notified organiser [${joinedGetTogether.getTogetherId}, ${joinedGetTogether.orderId}, ${joinedGetTogether.userEmail}]`);
    return "all done";
};
