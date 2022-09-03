const findTheOldest = function(people) {
    // recibe un array de objetos
    const sortedPeople = people.sort((a, b) => {
        const aYearOfDeath = a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear();
        const bYearOfDeath = b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear();
        const aOld = aYearOfDeath - a.yearOfBirth;
        const bOld = bYearOfDeath - b.yearOfBirth;
        return (aOld > bOld) ? -1 : 1;
    })
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
