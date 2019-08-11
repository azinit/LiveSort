import {sleep} from "../utils/misc";
import {swap} from "../utils/array";

/** Get timeIntervalUnit by current speed **/
function timeInterval(viewPanel, unit=400) {
    return unit * (1 / viewPanel.state.speed);
}

/**
 * BubbleSort
 * Run and in realtime update views by controller
 **/
async function bubbleSort(controller, callback_finished) {
    // Init args
    let values      = controller.elements;
    let views       = controller.views;
    let lists       = views.map(e => e.current.list.current);
    let arr         = values.slice();
    // Sleep before Sort
    await sleep(timeInterval(controller));

    // Sort Hook
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            lists.forEach(l => l.setSelected(true, j, j + 1));          //  setSelected a[j] and a[j+1]
            await sleep(timeInterval(controller));                      //  [WAIT] <Comparing>
            if (arr[j].value >= arr[j + 1].value) {                     //  <Comparing> =>
                lists.forEach(l => l.setActive(true, j, j + 1));        //      setActive swapped a[j] and a[j+1]
                await sleep(timeInterval(controller));                  //      [WAIT] <Active>
                swap(j, j + 1, arr, controller);                     //      <Swap>
                await sleep(timeInterval(controller));                  //      [WAIT] <Swap> results
            }
            lists.forEach(l => l.reset(j, j + 1));                      //  reset Selected and Active
        }
        lists.forEach(l => l.setDisabled(true,arr.length - i - 1));     //  setDisabled last Array
    }
    // Reset all selection and passAll sorted array
    lists.forEach(l => l.resetAll());
    await sleep(timeInterval(controller) * 4);
    lists.forEach(l => l.passAll());
    // Callback for change state
    callback_finished();
}

export default bubbleSort