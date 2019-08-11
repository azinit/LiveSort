import {sleep, swap} from "../utils";


function timeInterval(viewPanel, unit=400) {
    return unit * (1 / viewPanel.state.speed);
}

async function bubbleSort(controller, callback_finished) {
    let values      = controller.elements;
    let views       = controller.views;
    let lists       = views.map(e => e.current.list.current);
    // console.log(lists);
    // let list        = view.list.current;

    let arr         = values.slice();

    await sleep(timeInterval(controller));

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            lists.forEach(l => l.setSelected(true, j, j + 1));
            await sleep(timeInterval(controller));
            if (arr[j].value >= arr[j + 1].value) {
                lists.forEach(l => l.setActive(true, j, j + 1));
                await sleep(timeInterval(controller));
                swap(j, j + 1, arr, controller);
                await sleep(timeInterval(controller));
            }
            lists.forEach(l => l.reset(j, j + 1));
        }
        lists.forEach(l => l.setDisabled(true,arr.length - i - 1));
    }
    lists.forEach(l => l.resetAll());
    await sleep(timeInterval(controller) * 4);
    lists.forEach(l => l.passAll());
    callback_finished();
}

export default bubbleSort