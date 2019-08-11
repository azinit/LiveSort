import React, {Component} from 'react';
import List from "./List/List";

/** View for displaying test set by model (array, bubble, tree, ...) **/
class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iterations: 0,
        };
        this.list = React.createRef();
    }

    render() {
        const {elements, className, active} = this.props;
        const activeClass = (active) ? "view-panel__view_active" : "";
        return (
            <div className={`view-panel__view block ${activeClass}`}>
                <List
                    elements={elements}
                    className={className}
                    ref={this.list}
                />
            </div>
        );
    }

    /** Show if active **/
    componentWillUpdate(nextProps, nextState, nextContext) {
        let activeChanged = nextProps.active ^ this.props.active;
        if (activeChanged) {
            if (nextProps.active)   this.show();
            else                    this.hide();
        }
    }

    /****************************** LIST CONTROL ******************************/
    hide        = () => { this.list.current.hideAll() };
    show        = () => { this.list.current.showAll() };
    showEvery   = () => { this.list.current.showEvery() };
    passAll     = () => { this.list.current.passAll() };
}

export default View;