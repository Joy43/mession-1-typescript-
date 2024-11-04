{

    // condional type
    type a1=number
    type b1=undefined

    type X=a1 extends null ?true:false  //conditonal type

    type y=a1 extends null?true :b1 extends  undefined ? undefined:any;
    type Sheikh ={
        bike:string;
        car:string;
        ship:string;
        plane:string
    }
// car ase ki na / bike ase ki na / ship ase ki na/ teactor ase ki na

// key of operator
    // type CheckVehicle <T>=T extends "bike"|"car"|'ship'? true :false;
    type CheckVehicle <T>=T extends keyof Sheikh? true :false;
    type HasBike=CheckVehicle<'ship'>
    type plane=CheckVehicle<'plane'>
}