"use strict";
{
    // spread oprator
    const bros1 = ['joy', 'sami', 'sani'];
    const bros2 = ['tonmoy', 'nahid', 'showon'];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: 'mir vay',
        redux: 'mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'firoz',
        next: 'tonmoy',
        could: 'nahid',
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // ------rest operator
    const greedtFriend = (...friends) => {
        // const greedtFriend =(friend1:string,friend2:string,friend3:string)=>{
        // console.log(`hi ${friend1} ${friend2}${friend3}`)
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    greedtFriend('abul', 'kabul', 'nazmul');
}
