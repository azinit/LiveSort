/** Extract all **/
function extract_all(src, key) {
    return src.map(e => e[key])
}

/** Sleep (ms) time **/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function sleep(milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//         if ((new Date().getTime() - start) > milliseconds){
//             break;
//         }
//     }
// }

export {sleep, extract_all}