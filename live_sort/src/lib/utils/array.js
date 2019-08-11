import {getRandomInt} from "./nums";

function randomChoice(array) {
    let ind = getRandomInt(array.length, 0);
    return array[ind];
}

function range(n) {
    return [...Array(n).keys()];
}

function swap(i, j, array, controller=null) {
    [array[i], array[j]] = [array[j], array[i]];
    if (controller) controller.handlerSwap(i, j);
}

export {randomChoice, range, swap}