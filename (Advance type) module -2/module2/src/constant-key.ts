{
//  generic constant keyof operator
type Vehicle ={
    bike:string;
    car:string;
    ship:string
}

type Owner="bike" | "car" |"ship"   // manually
type Owner2 =keyof Vehicle   // key of operator


// normal function
const user={
    name:'ss joy',
    age:26,
    address:'ctg'
}

const  getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>{

    return obj[key];
}
const result1=getPropertyValue(user,'email')
user['age'] 

// 
}