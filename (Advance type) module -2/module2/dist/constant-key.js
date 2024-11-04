"use strict";
{
    // normal function
    const user = {
        name: 'ss joy',
        age: 26,
        address: 'ctg'
    };
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const result1 = getPropertyValue(user, 'email');
    user['age'];
    // 
}
