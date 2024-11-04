{

    // mapped types

    const arrOfNumbers:number[]=[1,4,5];
    // const arrofString:string[]=['1','4','5']
    const arrofString:string[]=arrOfNumbers.map((number)=>
    number.toString());
    console.log(arrOfNumbers)

    /* 
    Area types
    */

    type AreaNumber={
        height:number;
        width:number;

    };

    type Height=AreaNumber['height'] // look up type
   /*  type AreaString={
        height:string;
        width:string;
    } */
/* 
    type AreaString={
        [key in "height" |"width"]:string
    } */

   /*  type AreaString={
        [key in keyof AreaNumber]:string
    } */
    type AreaString={
        [key in keyof T]:T[key];
    };
// T-->{height:string;width:number}
    // Generic 
    const area1:AreaString<{height:string;width:number}>={
        height:'193',
        width:60
    }
}