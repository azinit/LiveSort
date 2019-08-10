function getRandomInt(max, min=4) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}

function getRandomArray(n) {
    // n = n || getRandomInt(8);

    let array = [];
    for (let i = 0; i < n; i++) {
        array.push({
           id: i,
           value: getRandomInt(15, 0),
        });
    }
    return array;
}

export {getRandomInt, getRandomArray}