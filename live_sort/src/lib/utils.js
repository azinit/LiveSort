function swap(i, j, array, controller=null) {
    [array[i], array[j]] = [array[j], array[i]];
    if (controller) controller.handlerSwap(i, j);

}


function range(n) {
    return [...Array(n).keys()];
}

function extract_all(src, key) {
    let results = [];
    for (let item of src) {
        results.push(item[key]);
    }
    return results
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// function sleep(ms) {
//     return setTimeout(function () {}, ms)
// }


// function sleep(milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//         if ((new Date().getTime() - start) > milliseconds){
//             break;
//         }
//     }
// }

export {swap, sleep, extract_all, range}