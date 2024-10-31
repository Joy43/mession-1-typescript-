// Union types
type FrontendDeveloperLevel = 'fakibazDeveloper' | 'juniordeveloper';
type FullstackDeveloperLevel = 'frontendDeveloper' | 'expertdeveloper';
type Developer = FrontendDeveloperLevel | FullstackDeveloperLevel;

const newDeveloper: FrontendDeveloperLevel = 'juniordeveloper';

type User = {
    name: string;
    email: string;
    gender: 'male' | 'female';
    bloodGroup: 'o+' | 'AB-';
}

const User1: User = {
    name: 'joyt',
    gender: 'male',
    bloodGroup: 'AB-',
    email: 'ssjoy43@mail.com'
};

type FrontendDeveloper = {
    skills: string[];
    designation: 'frontendDeveloper';
};

type BackendDeveloper = {
    skills: string[];
    designation: 'backendDeveloper';
};

// Intersection type for Fullstack Developer
type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper: FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'Express'],
    designation: 'frontendDeveloper' // This will represent the Frontend designation here
};
