{

    // type alias
type Usersall = {
    name: string;
    age: number;
    contactNo: string;
    address: string;
    gender: string;
};

const Users1: Usersall = {
    name: "Joy",
    age: 22,
    gender: 'Male',
    contactNo: '0433553411',
    address: 'Sherpur'
};

const Users2: Usersall = {
    name: "ssJoy",
    age: 24,
    gender: 'Male',
    contactNo: '04433553411',
    address: 'Dhaka'
};

type UserName = string;
type IsAdmin = boolean;

const isAdmin: IsAdmin = true;  // Renamed variable to `isAdmin`

}
