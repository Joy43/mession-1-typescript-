const user = {
    id: 343,
    name: {
        firstName: 'ss',
        middleName: 'sultan',
        lastName: 'joy'
    },
    contact: "017343433",
    address: 'sherpur'
};

const {
    contact,
    name: { middleName }
} = user; // Correctly destructuring the nested object properties

// ------array destructuring

const myFriends = ['chandler', 'joy', 'reach'];
const [,, bestFriend] = myFriends; // Skipping the first two elements to get 'reach'

console.log(contact);        // Output: "017343433"
console.log(middleName);     // Output: "sultan"
console.log(bestFriend);     // Output: "reach"
