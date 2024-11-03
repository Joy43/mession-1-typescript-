{

    // Interface with Generic Type
interface Developer<T,X=null> {
    name: string;
    computer: {   // "COMPUTER" is changed to lowercase "computer" to follow standard naming conventions.
        brand: string; // Changed from 'computer' to 'brand' to match the actual data type
        model: string;
        releaseYear: number;
    };
    smartWatch: T; // This is a generic type, which means it can vary based on the type provided when creating an instance.
    bike?:X;
}

// Defining the type for a smartwatch to use in generic type T
const DeveloperPoor: Developer<{
    band: string;
    model: string;
    display: string;
}> = {
    name: 'joy',
    computer: {
        brand: 'HP', // Renamed 'computer' to 'brand' to match the property name in Developer interface
        model: 'z-5345',
        releaseYear: 2013
    },
    smartWatch: {
        band: 'apple',
        model: 'apple-k454',
        display: 'LED'
    }
};

// Defining specific interfaces for types that can be used with Developer
interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;  // Fixed typo: 'hearTack' to 'heartTrack'
    sleepTrack: boolean;  // Fixed typo: 'sleepTack' to 'sleepTrack'
    display: string;
}

interface YamahaBike {
    model: string;
    engineCapacity: string;
}

// Example of using Developer interface with AppleWatch type
const DeveloperRich: Developer<AppleWatch> = {
    name: 'ss-joy',
    computer: {
        brand: 'MacBook',
        model: 'z-5345',
        releaseYear: 2013
    },
    smartWatch: {
        brand: 'apple watch',
        model: 'apple-k454',
        display: 'LED',
        heartTrack: true,
        sleepTrack: true
    }
};

// Another example where Developer interface could be used with a different type, e.g., YamahaBike.
const DeveloperWithBike: Developer<YamahaBike> = {
    name: 'john',
    computer: {
        brand: 'Dell',
        model: 'Inspiron',
        releaseYear: 2020
    },
    smartWatch: {   // Here, smartWatch is expected to be of type YamahaBike due to generic <YamahaBike>
        model: 'yamaha',
        engineCapacity: '100cc'
    }
   
};
}
