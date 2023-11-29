const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

console.log('for', newArray);

const rta = elements.concat(othersElements);
console.log('concat', rta);

//Esto solo serviria para arrays y objetos
const rta2 = [...elements, ...othersElements];
console.log('spread operator', rta2);

const rta3 = [...elements, 'random'];
console.log('spread operator', rta3);

const rta4 = [...elements, ...'random'];
console.log('spread operator', rta4);

elements.push(othersElements);
console.log('push', elements);

elements.push(...othersElements);
console.log('push con spread operator', elements);