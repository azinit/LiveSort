import React, {Component} from 'react';
import bubbleSort from "../../lib/sort/BubbleSort";
import List from "../../components/View/List/List";
import {swap} from "../../lib/utils/array";

class ArrayView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iterations: 0,
        };
        this.arrayList = React.createRef();
    }

    render() {
        return (
            <div className="view-panel__view block">
                <List
                    elements={this.props.elements}
                    className={"array-list"}
                    handlerSwap={this.viewSwap}
                    ref={this.arrayList}
                />
            </div>
        );
    }

    runSort = () => { bubbleSort(this) };

    viewSwap = (i, j) => {
        let elements = this.props.elements;
        swap(i, j, elements);
        this.forceUpdate();
    };


    /****************************** ARRAY-LIST CONTROL ******************************/
    hide        = () => { this.arrayList.current.hideAll() };
    show        = () => { this.arrayList.current.showAll() };
    showEvery   = () => { this.arrayList.current.showEvery() };
    passAll     = () => { this.arrayList.current.passAll() };
}

export default ArrayView;