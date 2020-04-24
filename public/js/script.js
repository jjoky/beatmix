// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

const toggleDrum = (drum, index) => {
    if (drum != undefined && index != undefined && index >=0 && index <16) {
        switch (drum) {
            case 'kicks':
                kicks[index] = !kicks[index];
                break;
            case 'snares':
                snares[index] = !snares[index];
                break;
            case 'hiHats':
                hiHats[index] = !hiHats[index];
                break;
            case 'rideCymbals':
                rideCymbals[index] = !rideCymbals[index];
                break;
            default:
                break;
        }
    }
}

const clear = drum => {
    if (drum != undefined) {
        switch (drum) {
            case 'kicks':
                kicks = new Array(16).fill(false);
                break;
            case 'snares':
                snares = new Array(16).fill(false);
                break;
            case 'hiHats':
                hiHats = new Array(16).fill(false);
                break;
            case 'rideCymbals':
                rideCymbals = new Array(16).fill(false);
                break;
            default:
                break;
        }
    }
};

const invert = drum => {
    if (drum != undefined) {
        switch (drum) {
            case 'kicks':
                kicks.forEach((element, index, array) => {
                    array[index] = !element;
                });
                break;
            case 'snares':
                snares.forEach((element, index, array) => {
                    array[index] = !element;
                });
                break;
            case 'hiHats':
                hiHats.forEach((element, index, array) => {
                    array[index] = !element;
                });
                break;
            case 'rideCymbals':
                rideCymbals.forEach((element, index, array) => {
                    array[index] = !element;
                });
                break;
            default:
                break;
        }
    }
};
