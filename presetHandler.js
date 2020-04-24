// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (method, index, newPresetArray) => {
    let result = [];

    if (method != 'GET' && method != 'PUT') {
        result.push(400);
    } else if (typeof index !== 'number' || index < 0 || index >= presets.length) {
        result.push(404);
    } else {
        result.push(200);
        if (method === 'GET') {method
            result.push(presets[index]);
        } else if (method === 'PUT') {
            presets[index] = newPresetArray;
            result.push(presets[index]);
        }
    }
    return result;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
