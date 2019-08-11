import React, {Component} from 'react';
import ArrayElement from "../ArrayElement/ArrayElement";
import '../../View/Views/Array.css';
import {range, sleep} from "../../../lib/utils";
import Element from "../../View/Element/Element";

class ArrayList extends Component {
    constructor(props) {
        super(props);
        this.computeElements(this.props.elements);
        this.handlerSwap           = this.props.handlerSwap;
    }
    render() {
        const elements = this.elements;
        return (
            <ul className="array-list block">
                {elements}
            </ul>
        );
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.computeElements(nextProps.elements);
    }

    computeElements = (data) => {
        let elementsDOM  = [];
        let elements     = data.map(el =>
            <Element
                key={el.id}
                element={el}
                ref={(el) => elementsDOM.push(el)}
                className={"array-list__element"}
            >
                {el.value}
            </Element>
        );

        this.elements    = elements;
        this.elementsDOM = elementsDOM;
    };

    size() { return this.elements.length; }

    get = (i) => this.elementsDOM[i];

    indices = () => range(this.size());

    /****************************** ELEMENT METHODS ******************************/

    setSelected = (mode, ...indices) => { indices.forEach(i => this.get(i).setSelected(mode)) };
    setActive   = (mode, i, j)       => { [i, j].forEach(i => this.get(i).setActive(mode))    };
    setDisabled = (mode, ...indices) => { indices.forEach(i => this.get(i).setDisabled(mode)) };
    setHidden   = (mode, ...indices) => { indices.forEach(i => this.get(i).setHidden(mode))   };
    hideAll     = ()                 => { this.setHidden(true, ...this.indices())                };
    showAll     = ()                 => { this.setHidden(false, ...this.indices())               };
    reset       = (...indices)       => { indices.forEach(i => this.get(i).reset())           };
    resetAll    = ()                 => { this.reset(...this.indices()) };


    // handlerSwap(i, j) {
    //     let classState = "array-list__li_swapped";
    //     // [i, j].forEach((ind) => this.onClick(ind, 1, classState));
    //     this.props.handlerSwap(i, j);
    //     // [i, j].forEach((ind) => this.onClick(ind, -1, classState));
    // }


    /****************************** COLLECTION METHODS ******************************/


    async passAll() {
        for (let el of this.elementsDOM.slice()) {
            // console.log(el.DOM, this.elementsDOM.map(e => e.DOM));
            el.setSelected();
            await sleep(150);
            el.reset();
        }
        // this.resetAll();
    };

    async hide() {
        //     this.setHidden(true, ...this.indices());
        //     await sleep(150);
    }

    async showEvery() {
        await sleep(500);
        for (let el of this.elementsDOM) {
            el.setHidden(false);
            await sleep(150);
        }
    }
}

export default ArrayList;