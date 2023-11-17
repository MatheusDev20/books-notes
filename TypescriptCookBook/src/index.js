// Get type Definitions without actually running T.S files

/** @typedef { import ("../@types/person").Person } Person */

/**
 * @param {Person} person
 */

const printPerson = (person) => {
  console.log(person.name)
}