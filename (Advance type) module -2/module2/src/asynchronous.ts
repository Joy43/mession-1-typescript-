{
    // ts-node-dev --respawn --transpile-only .\module2\src\asynconous.ts



/*

------------------
    type declear
------------------
 */
    const createPromise=():Promise<string>=>{
        return new Promise <string>((resolve,reject)=>{
            const data:string='something'
            if(data){
                resolve(data)

            }else{
                reject('failed to load data')
            }
        })
    }
 

    const showData=async()=>{
        const data=await createPromise()
console.log(data)
    }
    showData()


/*--------------
type declear
----------------
 */
type Something={something:string}

const createPromise=():Promise<Something>=>{
    return new Promise <Something>((resolve,reject)=>{
        const data:string='something'
        if(data){
            resolve(data)

        }else{
            reject('failed to load data')
        }
    })
}


const showData=async():Promise<Something>=>{
    const data:Something=await createPromise()
console.log(data)
}
showData()

/*--------------
Data fetching 
----------------
 */

type Todo={
    id:number;
    userId:number;
    title:string;
    completed:boolean
}
const getTodo=async():Promise<Todo>=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/todos')
    const data=await res.json();
    console.log(data)
}

getTodo()

}