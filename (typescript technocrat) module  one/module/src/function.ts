{

    // Learnibng function

// -----> normarl function
//  ------> Array function

function add(num1:number,num2:number):number{
    return num1+num2;
}
add(2,5)
// -----arrow function
const addArrow=(num1:number,num2:number):number=>num1+num2;


//  object --->function---->method
const poorUser={
    name:'jOY',
    blance:0,
    addBlace(blance:number):number{
        return this.blance + blance
    }
}

const arr :number []=[1,4,10]
const newArray:number[]=arr.map((elem:number):number=>elem*elem)
}