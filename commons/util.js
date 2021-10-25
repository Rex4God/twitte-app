const validateParameter = (expectedParams, actualParams) => {
    const messages = [];
    let isValid = true;

    if(!actualParams){
        throw("Invalid Parameters")
    }

    expectedParams.forEach(parameter => {
        const actualParameter = actualParams[parameter];
        if (actualParameter === null || actualParameter === undefined || actualParameter === '') {
            messages.push(`${parameter} is required`);
            isValid = false;
        }
    });

    return { isValid, messages };
}

module.exports = {validateParameter}