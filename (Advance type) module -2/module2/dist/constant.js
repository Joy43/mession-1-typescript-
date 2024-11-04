"use strict";
{
    const addCourseToStudent = (student) => {
        const course = "Next level web developer";
        return Object.assign(Object.assign({}, student), { course });
    };
    // const student3=addCourseToStudent({emni:'emni'})
    const student1 = addCourseToStudent({
        id: 2223,
        name: 'Mr X',
        email: 'ssjoy@gmil.com',
        devType: 'Nlwd'
    });
    const student2 = addCourseToStudent({
        name: 'Mr Y',
        email: 'yasing@gmail.com',
        hashWatch: 'apple watch',
    });
}
