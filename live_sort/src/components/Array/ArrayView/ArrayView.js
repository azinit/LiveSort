import React, {Component} from 'react';
import ArrayList from "../ArrayList/ArrayList";
import {swap} from "../../../lib/utils";
import bubbleSort from "../../../lib/sort/BubbleSort";

class ArrayView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iterations: 0,
        };
        // this.speed = this.props.speed;
        this.arrayList = React.createRef();
    }

    render() {
        return (
            <div className="view-panel__view block">
                <ArrayList
                    elements={this.props.elements}
                    ref={this.arrayList}
                    handlerSwap={this.viewSwap}
                />
            </div>
        );
    }

    runSort = () => { bubbleSort(this) };

    viewSwap = (i, j) => {
        let elements = this.props.elements;
        swap(i, j, elements);
        this.forceUpdate();
        // this.setState({ iterations: this.state.iterations + 1 });
    };


    /****************************** ARRAY-LIST CONTROL ******************************/
    hide        = () => { this.arrayList.current.hideAll() };
    show        = () => { this.arrayList.current.showAll() };
    showEvery   = () => { this.arrayList.current.showEvery() };
    passAll     = () => { this.arrayList.current.passAll() };
}

export default ArrayView;