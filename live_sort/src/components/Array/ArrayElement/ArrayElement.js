import React, {Component} from 'react';
// import {glare} from "../../../lib/effects";
import "../../Creative/Bubble/Bubble.css"

class ArrayElement extends Component {
    STATE_SELECTED  = "array-list__element_selected";
    STATE_SWAPPED   = "array-list__element_swapped";
    STATE_DISABLED  = "array-list__element_disabled";
    // STATE_SELECTED  = "bubble_selected";
    // STATE_SWAPPED   = "bubble_swapped";
    // STATE_DISABLED  = "bubble_disabled";
    STATE_HIDDEN    = "b_hidden";

    DOM = null;

    render() {
        // console.log("EEE", "RENDER");
        let {element} = this.props;

        return (
            <li
                className="array-list__element block"
                // className="bubble block"
                onClick={this.click}
                ref={li => this.DOM = li}
            >
                {element.value}
            </li>
        );
    }

    /****************************** METHODS SUMMARY ******************************/

    click = () => {
        console.log(this.props.element.value);
    };

    reset = () => {
        this.toggle(-1, this.STATE_SELECTED);
        this.toggle(-1, this.STATE_SWAPPED);
        this.toggle(-1, this.STATE_DISABLED);
    };

    setSelected = (mode=true) => { this.toggle(mode ? 1 : -1, this.STATE_SELECTED) };
    setSwapped  = (mode=true) => { this.toggle(mode ? 1 : -1, this.STATE_SWAPPED ) };
    setDisabled = (mode=true) => { this.toggle(mode ? 1 : -1, this.STATE_DISABLED) };
    setHidden   = (mode=true) => { this.toggle(mode ? 1 : -1, this.STATE_HIDDEN)   };


    toggle = (operationCode, classState) => {
        if (this.DOM) {
            let classList = this.DOM.classList;

            switch (operationCode) {
                case 1:
                    classList.add(classState);
                    break;
                case -1:
                    classList.remove(classState);
                    break;
                default:
                    classList.onClick(classState);
                    break;
            }
        }

    }
    // componentWillMount() {
    //     // glare("array-element")
    // }
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(nextProps.value, this.props.value);
    //     return nextProps.value !== this.props.value;
    // }
    //
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log("EEE", "componentWillUpdate");
    // }

    //
    // click = () => {
    //     console.log("CLICK", this.props.value);
    // }
}

export default ArrayElement;