"use strict";
{
    // mapped types
    const arrOfNumbers = [1, 4, 5];
    // const arrofString:string[]=['1','4','5']
    const arrofString = arrOfNumbers.map((number) => number.toString());
    console.log(arrOfNumbers);
    // T-->{height:string;width:number}
    // Generic 
    const area1 = {
        height: '193',
        width: 60
    };
}
