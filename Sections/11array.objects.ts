
interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

export let fernando: Person = {
    name: 'Fernando',
    age: 36,
    isActive: true,
};

let Ana: Person = {
    name: 'Ana',
    age: 23,
    isActive: false,
};

let Juan: Person = {
    name: 'Juan',
    age: 23,
    isActive: true,
};


let people = [ fernando, Ana, Juan];

for ( let i = 0; i < people.length; i++) {
    let person = people [i];
    console.log (person.name + ' ' + person.age);
}

