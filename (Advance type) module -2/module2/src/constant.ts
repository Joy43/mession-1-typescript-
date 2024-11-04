{

    const addCourseToStudent=<T extends{name:string;id:number;email:string; }>(student:T)=>{
        const course="Next level web developer";
        return{
    ...student,
    course
        }
    };
    
    // const student3=addCourseToStudent({emni:'emni'})
    
    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id:2223,
        name:'Mr X',
        email:'ssjoy@gmil.com',
        devType:'Nlwd'
    });
    
    const student2=addCourseToStudent({
        name:'Mr Y',
        email:'yasing@gmail.com'
        hashWatch:'apple watch',
    })
    
}