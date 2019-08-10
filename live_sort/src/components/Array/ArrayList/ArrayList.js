import React, {Component} from 'react';
import ArrayElement from "../ArrayElement/ArrayElement";
import '../Array.css';
import {sleep} from "../../../lib/utils";

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
            <ArrayElement
                key={el.id}
                element={el}
                ref={(el) => elementsDOM.push(el)}
            />
        );

        this.elements    = elements;
        this.elementsDOM = elementsDOM;
    };

    size() { return this.elements.length; }

    get = (i) => this.elementsDOM[i];

    indices = () => Array(this.size()).keys();

    /****************************** ELEMENT METHODS ******************************/

    setSelected = (mode, ...indices) => { indices.forEach(i => this.get(i).setSelected(mode)) };
    setSwapped  = (mode, i, j)       => { [i, j].forEach( i => this.get(i).setSwapped(mode))  };
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