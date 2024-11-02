"use strict";
{
    // type assertion
    let anything;
    anything = "backend software engineering";
    anything = 3555;
    anything;
    const kgTogm = (value) => {
        if (typeof value === 'string') {
            const convetedValue = parseFloat(value) * 1000;
            return `the conveted vallue is : ${convetedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgTogm(1000);
    const result2 = kgTogm("1000"); //sting 
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
