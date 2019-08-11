import React, {Component} from 'react';
import Element from "../Element/Element";
import {sleep} from "../../../lib/utils/misc";

/** View List for managing Elements **/
class List extends Component {
    componentWillMount() {
        this.computeElements(this.props.elements);
    }

    render() {
        const elements = this.elements;
        const {className} = this.props;
        return (
            <ul className={`list block ${className}`}>
                {elements}
            </ul>
        );
    }

    /** Get ElementListDOM with parameters **/
    computeElements = (data) => {
        let elementsDOM  = [];
        const className  = `${this.props.className}__element`;
        let elements     = data.map(el =>
            <Element
                key={el.id}
                element={el}
                ref={(el) => elementsDOM.push(el)}
                className={className}
            >
                {el.value}
            </Element>
        );

        this.elements    = elements;
        this.elementsDOM = elementsDOM;
    };

    /** Update list if updated props.elements **/
    componentWillUpdate(nextProps, nextState, nextContext) { this.computeElements(nextProps.elements) }

    get             = (i)   => this.elementsDOM[i];
    size            = ()    => this.elements.length;
    indices         = ()    => Array(this.size()).keys();

    /****************************** ELEMENT METHODS ******************************/
    // Set appearance for elements
    setSelected = (mode, ...indices) => { indices.forEach(i => this.get(i).setSelected(mode)) };
    setActive   = (mode, i, j)       => { [i, j].forEach( i => this.get(i).setActive(mode))   };
    setDisabled = (mode, ...indices) => { indices.forEach(i => this.get(i).setDisabled(mode)) };
    setHidden   = (mode, ...indices) => { indices.forEach(i => this.get(i).setHidden(mode))   };
    hideAll     = ()                 => { this.setHidden(true, ...this.indices())                };
    showAll     = ()                 => { this.setHidden(false, ...this.indices())               };
    reset       = (...indices)       => { indices.forEach(i => this.get(i).reset())           };
    resetAll    = ()                 => { this.reset(...this.indices())                                 };


    /****************************** COLLECTION METHODS ******************************/

    // pass all list with pauses
    async passAll() {
        for (let el of this.elementsDOM.slice()) {
            el.setSelected();
            await sleep(150);
            el.reset();
        }
    };

    // show every element
    async showEvery() {
        await sleep(500);
        for (let el of this.elementsDOM) {
            el.setHidden(false);
            await sleep(150);
        }
    }
}

export default List;