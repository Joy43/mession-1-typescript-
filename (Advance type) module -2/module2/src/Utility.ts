{
// pick up

type Person ={
name:string;
age:number;
email?:string;
contactNo:string

}

type Name=Pick<Person,"name" |  "age">



// omit
type Contactinfo=Omit<Person,"email"|"contactNo">



// Required 
type PersonRequired=Required<Person>



// Read only
type PersonReadonly = Readonly <Person>
const person1:Person={
    name:'joy',
    contactNo:'01744'
};
person1.name='mr joy'
}

// --------- record ----------

// type Myobj={
//     a:string;
//     b:string
// }

type Myobj=Record <string,string>

type Emptyobj:Record<string,unknown>={}

const obj1:Myobj={
    a:"aa",
    b:"bb",
    c:"bb"
}
