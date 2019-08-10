import React, {Component} from 'react';
import './ViewPanel.css'
import ArrayView from "../../components/Array/ArrayView/ArrayView";
import {getRandomArray} from "../../lib/utils/nums";
import ViewBar from "./ViewBar/ViewBar";

class ViewPanel extends Component {
    constructor(props) {
        super(props);
        this.arrayView  = React.createRef();
        this.state = {
            isSorting: false,
            speed: 1,
            count: 8,
        };

    }

    componentWillMount() {
        this.handlerViewGenerate();
    }

    componentDidUpdate() {
        if (!this.state.isSorting) {
            let arrayView = this.arrayView.current;
            // if (arrayView) arrayView.showEvery();
            arrayView.passAll();
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.state.count !== nextState.count) {
            this.elements = getRandomArray(nextState.count);
        }
    }

    render() {
        return (
            <div className="view-panel">
                <ViewBar
                    onSort={this.handlerViewSort}
                    onGenerate={this.handlerViewGenerate}
                />

                <ArrayView
                    speed={this.state.speed}
                    elements={this.elements}
                    ref={this.arrayView}
                />
                {/*<div className="view-panel__view block">*/}
                {/*    */}
                {/*</div>*/}
            </div>
        );
    }

    /****************************** DRILL METHODS ******************************/

    handlerViewCount = (count) => {
        this.setState({count: count});
    };

    handlerViewSpeed = (speed) => { this.setState({speed: speed}) };

    handlerViewGenerate = () => {
        this.elements = getRandomArray(this.state.count);
        this.setState(this.state);
    };

    handlerViewSort = () => {
        this.arrayView.current.runSort(this.speed);
        this.setState({isSorting: true})
    };
}

export default ViewPanel;