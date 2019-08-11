import React, {Component} from 'react';
import List from "./List/List";

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iterations: 0,
        };
        this.list = React.createRef();
        this.swap = this.props.handlerSwap;
    }

    render() {
        const {elements, className, active} = this.props;
        const activeClass = (active) ? "view-panel__view_active" : "";
        return (
            <div className={`view-panel__view block ${activeClass}`}>
                {/*<button onClick={this.hide}>Hide</button>*/}
                {/*<button onClick={this.show}>Show</button>*/}
                <List
                    elements={elements}
                    className={className}
                    ref={this.list}
                />
            </div>
        );
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        let activeChanged = nextProps.active ^ this.props.active;
        if (activeChanged) {
            if (nextProps.active)   this.show();
            else                    this.hide();
        }
    }

    // runSort = () => { bubbleSort(this) };

    // viewSwap = (i, j) => {
    //     let elements = this.props.elements;
    //     swap(i, j, elements);
    //     this.forceUpdate();
    // };


    /****************************** LIST CONTROL ******************************/
    hide        = () => { this.list.current.hideAll() };
    show        = () => { this.list.current.showAll() };
    showEvery   = () => { this.list.current.showEvery() };
    passAll     = () => { this.list.current.passAll() };
}

export default View;