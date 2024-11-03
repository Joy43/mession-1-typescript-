{
// Generic type

// type GenericArray=Array<string>
type GenericArray<T>=Array<T>
/*      --------------------
        Array of numbers
        -------------------- */
// const rollNumbers:number[]=[3,6,8];
// const rollNumbers:Array<number>=[3,6,8]
const rollNumbers:GenericArray<number>=[3,6,8]

/*      --------------------
        Array of string
        --------------------    */
// const mentors:string[]=['MR JOY','Mr y','Mr z']
// const mentors:Array<string>=['MR JOY','Mr y','Mr z']
const mentors:GenericArray<string>=['MR JOY','Mr y','Mr z']

/*      --------------------
        Array of boolean
        -------------------- */
// const boolArray:boolean[]=[true,false,true]
// const boolArray:Array<boolean>=[true,false,true]
const boolArray:GenericArray<boolean>=[true,false,true]

/* 
    rray of objects with name and
            age properties
*/
// type User={
//     name:string;
//     age:number
// }
interface User{
    name:string;
    age:number
}

const user :GenericArray<User>=[
    {
        name:'joy',
        age:100
    },
    {
        name:'janker mahbub',
        age:37
    }
]
console.log(user);

//----------------  FUNCTION --------------
const add=(X:number, y:number)=>X+y
add(39,67);
/* generic tuple  array
Define a generic tuple type */
type GenericTuple<X, Y> = [X, Y];

// Using the generic tuple type with strings
const manus: GenericTuple<string,string> = ['Mr x', 'Mr y'];

// Using the generic tuple type with a number and an object
const UserWithID: GenericTuple<number, { name: string; email: string }> = [
  1234,
  { name: 'person', email: 'ssjoy@gmail.com' }
];
console.log(UserWithID);

}