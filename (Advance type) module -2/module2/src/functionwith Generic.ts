{
    /* Function with generics */

    // Creates an array with a single string element
    const createArray = (param: string): string[] => {
        return [param];
    };

    // Creates an array with a single element of any type using generics
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    // Example of using createArray function with a string
    const res1 = createArray('Bangladesh');
    console.log("Result of createArray:", res1);

    // Example of using createArrayWithGeneric function with a boolean
    const resGeneric = createArrayWithGeneric<boolean>(true);
    console.log("Result of createArrayWithGeneric (boolean):", resGeneric);

    // Define a custom type for user object
    type User = { id: number; name: string };

    // Example of using createArrayWithGeneric with an object of type User
    const resGenericObj = createArrayWithGeneric<User>({ id: 353, name: 'ss joy' });
    console.log("Result of createArrayWithGeneric (User object):", resGenericObj);

    // ------- Tuple Example -------

    // Creates an array with a single string element
    const createArrayWithTuple = (param: string): string[] => {
        return [param];
    };

    // Creates a tuple with two elements of any types specified by generics
    const createArrayWithTupleGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    // Example of using createArrayWithTupleGeneric with a string and a number
    const res10 = createArrayWithTupleGeneric<string, number>('Bangladesh', 123);
    console.log("Result of createArrayWithTupleGeneric (string, number):", res10);

    // Example of using createArrayWithTupleGeneric with a string and an object
    const res11 = createArrayWithTupleGeneric<string, { name: string }>('Bangladesh', { name: 'Asia' });
    console.log("Result of createArrayWithTupleGeneric (string, object):", res11);

    /* Adds a course to a student object using generics */
    const addCourseToStudent = <T>(student: T) => {
        const course = 'Spoken English';
        return {
            ...student,
            course,
        };
    };

    // Examples of using addCourseToStudent function with different student objects
    const student1 = addCourseToStudent({ name: 'Joy', email: 'ssjoy@gmail.com', devType: 'Next Level Dev' });
    console.log("Result of addCourseToStudent (student1):", student1);

    const student2 = addCourseToStudent({ name: 'Joy', email: 'ssjoy@gmail.com', devType: 'Next Level Dev' });
    console.log("Result of addCourseToStudent (student2):", student2);
}
