

{
    const Users1 = {
        name: "Joy",
        age: 22,
        gender: 'Male',
        contactNo: '0433553411',
        address: 'Sherpur'
    };
    const Users2 = {
        name: "ssJoy",
        age: 24,
        gender: 'Male',
        contactNo: '04433553411',
        address: 'Dhaka'
    };
    const isAdmin = true;

    // ---------type alias function----------
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;

    // Test example
    console.log(add(5, 3)); // Output: 8
}
