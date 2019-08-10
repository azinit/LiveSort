import {sleep, swap} from "../utils";


function timeInterval(view, unit=400) {
    return unit * (1 / view.props.speed);
}

async function bubbleSort(view) {
    let arrayList = view.arrayList.current;
    let values    = view.props.elements;
    let arr       = values.slice();

    await sleep(timeInterval(view));

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            // console.log("BUBBLE_SORT", arr.map(el => el.value), j, j + 1);
            arrayList.setSelected(true, j, j + 1);
            await sleep(timeInterval(view));
            if (arr[j].value >= arr[j + 1].value) {
                arrayList.setSwapped(true, j, j + 1);
                await sleep(timeInterval(view));
                swap(j, j + 1, arr, arrayList);
                await sleep(timeInterval(view));
            }
            arrayList.reset(j, j + 1);
        }
        arrayList.setDisabled(true,arr.length - i - 1);
    }
    arrayList.resetAll();
    await sleep(timeInterval(view) * 4);
    arrayList.passAll();
}

export default bubbleSort