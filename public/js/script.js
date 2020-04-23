// Drum Arrays
let kicks = [];
let snares = [];
let hiHats = [];
let rideCymbals = [];

const initialize = (drum) => {
    for(let i = 0; i < 16; i++) {
        drum.push(false);
    }
}

const toggleDrum = (drum, index) => {
    drum[index] = !drum[index];
}

const clear = drum => {
    drum.forEach((element, index, array) => {
        array[index] = false;
    });
};

const invert = drum => {
    drum.forEach((element, index, array) => {
        array[index] = !element;
    });
};

initialize(kicks);
initialize(snares);
initialize(hiHats);
initialize(rideCymbals);

console.log(kicks);
console.log(snares);
console.log(hiHats);
console.log(rideCymbals);
