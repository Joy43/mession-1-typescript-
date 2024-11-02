{
    // inter face

    // type User1={
    //     name:string;
    //     age:number;
    // }
    type User2={
        name:string;
        age:number;
    }
    interface User1 {
        name:string;
        age:number;
    }

    type UserWithRole1=User2 &{role:string};  // allieas extant

    interface UnserWithRole2 extends User2{
        role:string
    } // interface extant
    const user1={
        name:"joy",
        age:35,

    }
    const user2:User1={
        name:"joy islam",
        age:15,

    }
    const User2:UserWithRole1={
        name:"joy islam",
        age:21,
        role:'manager'
    }
    console.log(user1,user2,User2);

    // ----------js----> object,array-->object funtion-->object

    type Roll =number[];  // type allies
    const rollNumber:Roll=[1,2,3]
    interface Roll2{
        [index:number]:number
    }
  const rollNumber2:Roll2=[1,2,3]  //0 1 2 ---> number type


//   function

type Add=(num1:number,num2:number)=>number //---- type allieas

    interface Add2{
        (num1:number,num2:number):number
    
}
const add:Add2=(num1,num2)=>num1+num2;
console.log(add)
}