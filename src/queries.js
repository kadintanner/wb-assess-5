import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = Human.findByPk(2)

// Get the first animal whose species is "fish"
export const query2 = Animal.findOne({
    where: {
        species: 'fish'
    }
})

// Get all animals belonging to the human with primary key 5
// SELECT * FROM animals WHERE human_id = 5;
export const query3 = Animal.findAll({
    where: {
        human_id: 5
    }
})

// Get all animals born in a year greater than (but not equal to) 2015.
// SELECT * FROM animals WHERE birth_year > 2015;
export const query4 = Animal.findAll({
    where: {
            birthYear: { [Op.gt]: 2015 }
    }
})

// Get all the humans with first names that start with "J"
// SELECT * FROM humans WHERE fname LIKE 'J%';
export const query5 = Human.findAll({
    where: {
        fname: { [Op.startsWith]: 'J%'}
    }
})

// Get all the animals who don't have a birth year
export const query6 = Animal.findAll({
    where: {
        birth_year: { [Op.is]: null }
    }
})

// Get all the animals with species "fish" OR "rabbit"
export const query7 = Animal.findAll({
    where: {
        [Op.or]: [
            {species: 'fish'},
            {species: 'rasbiit'}
        ]
    }
})

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = Human.findAll({
    where: {
        gmail: { [Op.notLike]: '%gmail%' }
    }
})


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
