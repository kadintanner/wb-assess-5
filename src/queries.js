import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = {
    human_id: 2,
    fname: 'Jane',
    lname: 'Doe',
    email: 'jdoe@gmail.com'
};

// Get the first animal whose species is "fish"
export const query2 = {
    animal_Id: 5,
    human_id: 4,
    name: 'Bubbles',
    species: 'fish',
    birth_year: null
};

// Get all animals belonging to the human with primary key 5
// SELECT * FROM animals WHERE human_id = 5;
export const query3 = [
    {
        animal_Id: 7,
        human_id: 5,
        name: 'Bugs',
        species: 'rabbit',
        birth_year: 2016
    },
    {
        animal_Id: 9,
        human_id: 5,
        name: 'Buster',
        species: 'dog',
        birth_year: 2011
    },
    {
        animal_Id: 10,
        human_Id: 5,
        name: 'Twinkle',
        species: 'dog',
        birth_year: 2014
    }
];

// Get all animals born in a year greater than (but not equal to) 2015.
// SELECT * FROM animals WHERE birth_year > 2015;
export const query4 = [
    {
        animal_Id: 2,
        human_Id: 2,
        name: 'Squiggles',
        species: 'snake',
        birth_year: 2016
    },
    {
        animal_Id: 4,
        human_Id: 2,
        name: 'Birdy',
        species: 'bird',
        birth_year: 2017
    },
    {
        animal_id: 7,
        human_Id: 5,
        name: 'Bugs',
        species: 'rabbit',
        birth_year: 2016
    },
    {
        animal_Id: 11,
        human_Id: 4,
        name: 'Fluffster',
        species: 'dog',
        birth_year: 2019
    }
];

// Get all the humans with first names that start with "J"
// SELECT * FROM humans WHERE fname LIKE 'J%';
export const query5 = [
    {
        human_Id: 2,
        fname: 'Jane',
        lname: 'Doe',
        email: 'jdoe@gmail.com'
    },
    {
        human_Id: 3,
        fname: 'Jasmine',
        lname: 'Debugger',
        email: 'jdebugs@hotmail.com',
    },
    {
        human_Id: 4,
        fname: 'John',
        lname: 'Doe',
        email: 'john_doe@gmail.com'
    },
    {
        human_Id: 5,
        fname: 'Jane',
        lname: 'Hacks',
        email: 'jhacks@gmail.com'
    }
];

// Get all the animals who don't have a birth year
export const query6 = [
    {
        animal_Id: 5,
        human_Id: 4,
        name: 'Bubbles',
        species: 'fish',
        birth_year: null
    },
    {
        animalId: 6,
        humanId: 2,
        name: 'Mr. Hops',
        species: 'rabbit',
        birthYear: null
      },
      {
        animalId: 8,
        humanId: 1,
        name: 'Cuddles',
        species: 'cat',
        birthYear: null
      }
];

// Get all the animals with species "fish" OR "rabbit"
export const query7 = [
    {
      animalId: 5,
      humanId: 4,
      name: 'Bubbles',
      species: 'fish',
      birthYear: null
    },
    {
      animalId: 6,
      humanId: 2,
      name: 'Mr. Hops',
      species: 'rabbit',
      birthYear: null
    },
    {
      animalId: 7,
      humanId: 5,
      name: 'Bugs',
      species: 'rabbit',
      birthYear: 2016
    }
  ];

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = [
    {
      humanId: 1,
      fname: 'Bob',
      lname: 'Personne',
      email: 'bpersonne@yahoo.com'
    },
    {
      humanId: 3,
      fname: 'Jasmine',
      lname: 'Debugger',
      email: 'jdebugs@hotmail.com'
    }
  ];

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    const pets = await Animal.findAll()

    pets.forEach(async (pet) => {
        const person = await pet.getHuman_Id()
        if (person) {
            console.log(pet.name, pet.species)
        } else {
            console.log(pet.name, 'no species??')
        }
    })
}

// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {
    const humans = new Set()
    
    humans.add(humanName)
}
