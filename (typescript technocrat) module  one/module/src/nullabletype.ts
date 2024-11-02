{
    // ts-node-dev --respawn --transpile-only .\module\src\nullabletype.ts

// -----nullable type-------
const searchName = (value: string | null) => {
    if (value) {
        console.log("search");
    } else {
        console.log("there is nothing to search");
    }
};
searchName(null);

// -----unknown type-------
const getStringInMeterperSecond = (value: unknown) => {
    if (typeof value === 'number') {
        const convertedSpeed = ((value * 1000) / 3600);
        console.log(`The speed is ${convertedSpeed} m/s`);
    } else if (typeof value === 'string') {
        const [result, unit] = value.split(" ");
        const convertedSpeed = ((parseFloat(result) * 1000) / 3600);
        console.log(`The speed is ${convertedSpeed} m/s`);
    } else {
        console.log("Wrong input");
    }
};

// Function call for getStringInMeterperSecond
getStringInMeterperSecond("1000 kmh^-1");

function throwError(msg: string) {
    throw new Error(msg);
}

}