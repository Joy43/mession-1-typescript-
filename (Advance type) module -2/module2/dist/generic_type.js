"use strict";
{
    /*      --------------------
            Array of numbers
            -------------------- */
    // const rollNumbers:number[]=[3,6,8];
    // const rollNumbers:Array<number>=[3,6,8]
    const rollNumbers = [3, 6, 8];
    /*      --------------------
            Array of string
            --------------------    */
    // const mentors:string[]=['MR JOY','Mr y','Mr z']
    // const mentors:Array<string>=['MR JOY','Mr y','Mr z']
    const mentors = ['MR JOY', 'Mr y', 'Mr z'];
    /*      --------------------
            Array of boolean
            -------------------- */
    // const boolArray:boolean[]=[true,false,true]
    // const boolArray:Array<boolean>=[true,false,true]
    const boolArray = [true, false, true];
    const user = [
        {
            name: 'joy',
            age: 100
        },
        {
            name: 'janker mahbub',
            age: 37
        }
    ];
    console.log(user);
    //----------------  FUNCTION --------------
    const add = (X, y) => X + y;
    add(39, 67);
    // Using the generic tuple type with strings
    const manus = ['Mr x', 'Mr y'];
    // Using the generic tuple type with a number and an object
    const UserWithID = [
        1234,
        { name: 'person', email: 'ssjoy@gmail.com' }
    ];
    console.log(UserWithID);
}
