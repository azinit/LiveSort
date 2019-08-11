import React, {Component} from 'react';

/** View control bar **/
class ViewBar extends Component {
    render() {
        return (
            <div className="view-panel__bar block">
                <button className="view-panel__btn btn" onClick={this.props.onToggle}>&#9776;</button>
                <button className="view-panel__btn btn" onClick={this.props.onSort}>▶</button>
                <button className="view-panel__btn btn" onClick={this.props.onGenerate}>⟳</button>
            </div>
        );
    }
}

export default ViewBar;