{

    // type assertion
    let anything :any;
    anything="backend software engineering";
    anything=3555;
    (anything as number)

    const kgTogm=(value:string | number):string |number|undefined=>{
        if(typeof value ==='string'){
            const convetedValue =parseFloat(value)*1000;
            return `the conveted vallue is : ${convetedValue}`
        }
        if(typeof value ==="number"){
            return value *1000
        }
    }
    const result1=kgTogm(1000) as number;
    const result2=kgTogm("1000") as string //sting 

type CustomError={
    message:string
}

    try{

    }catch(error){
        console.log((error as CustomError).message);
    }
}