"use strict";
{
    // Learnibng function
    // -----> normarl function
    //  ------> Array function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 5);
    // -----arrow function
    const addArrow = (num1, num2) => num1 + num2;
    //  object --->function---->method
    const poorUser = {
        name: 'jOY',
        blance: 0,
        addBlace(blance) {
            return this.blance + blance;
        }
    };
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
}
