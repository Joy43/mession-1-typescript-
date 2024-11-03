"use strict";
{
    // Defining the type for a smartwatch to use in generic type T
    const DeveloperPoor = {
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
    // Example of using Developer interface with AppleWatch type
    const DeveloperRich = {
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
    const DeveloperWithBike = {
        name: 'john',
        computer: {
            brand: 'Dell',
            model: 'Inspiron',
            releaseYear: 2020
        },
        smartWatch: {
            model: 'yamaha',
            engineCapacity: '100cc'
        }
    };
}
