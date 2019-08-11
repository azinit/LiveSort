import React, {Component}   from 'react';
import ViewBar              from "./ViewBar/ViewBar";
import View                 from "../../components/View/View";
import ViewSwitcher         from "./ViewSwticher/ViewSwitcher";
import bubbleSort           from "../../lib/sort/BubbleSort";
import {getRandomArray}     from "../../lib/utils/nums";
import {range, swap}        from "../../lib/utils/array";
import './ViewPanel.css'
import '../../components/View/List/List.css'
import '../../components/View/Views/Array.css'
import '../../components/View/Views/Bubble.css'

/** Base View Panel with sort displaying **/
class ViewPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: 1,
            count: 8,
            active: 0,
        };
        this.DOM         = React.createRef();
        this.arrayView   = React.createRef();
        this.bubbleView  = React.createRef();

        this.views       = [
            this.arrayView,
            this.bubbleView,
        ];

    }

    // Generate array before render
    componentWillMount() { this.handlerGenerate() }
    // Pass on array after render
    componentDidMount() { this.viewsPassAll() }

    render() {
        const views = this.computeViews();
        return (
            <div className="view-panel" ref={this.DOM}>
                <ViewBar
                    onSort={this.handlerSort}
                    onGenerate={this.handlerGenerate}
                    onToggle={this.props.handlerToggle}
                />
                <div className="view-panel__canvas">
                    {views}
                    <ViewSwitcher onSwitch={this.handlerSwitch} active={this.state.active}/>
                </div>

            </div>
        );
    }

    /** Get actual views **/
    computeViews = () => {
        let classList = ["array-list", "bubble-list"];
        let refList = [this.arrayView, this.bubbleView];
        let indices = range(classList.length);
        return indices.map(i =>
            <View
                key={i}
                className={classList[i]}
                active={this.state.active === i}
                elements={this.elements}
                speed={this.state.speed}
                ref={refList[i]}
                handlerSwap={this.handlerSwap}
            />
        )
    };

    /** Update testset if count updated **/
    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.state.count !== nextState.count) {
            this.elements = getRandomArray(nextState.count);
        }
    }

    /** Pass all test set if updated **/
    componentDidUpdate() {
        if (!this.props.isSorting) { this.viewsPassAll() }
    }

    /****************************** METHODS SUMMARY ******************************/
    // Views
    viewsPassAll = () => { this.views.forEach(v => v.current.list.current.passAll()) }
    // Settings
    handlerCount = (count) => { this.setState({count: count}) };
    handlerSpeed = (speed) => { this.setState({speed: speed}) };

    /** Run generating **/
    handlerGenerate = () => {
        this.elements = getRandomArray(this.state.count);
        this.setState(this.state);
    };


    /** Run sorting **/
    handlerSort = () => {
        // TODO: add Treesort!!!

        if (!this.props.isSorting) {
            const finish_sort = () => { this.props.handlerSort(false) };
            bubbleSort(this, finish_sort);
            this.props.handlerSort(true)
        } else {
            console.log("Array already is sorting!");
        }
    };

    /** Swap elements **/
    handlerSwap = (i, j) => {
        swap(i, j, this.elements);
        this.setState(this.state);
    };

    /** Switch view **/
    handlerSwitch = (newActive) => { this.setState({active: newActive}) };
}

export default ViewPanel;